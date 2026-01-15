import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import { s3Client } from './s3'

export async function generateUrls(images: File[], app_id: string) {
    const uploadUrls = await Promise.all(
        images.map(async (image: File) => {
            const fileName = `${app_id}/${Date.now()}-${image.name}`
            const command = new PutObjectCommand({
                Bucket: process.env.APP_AWS_S3_BUCKET_NAME,
                Key: fileName,
                ContentType: image.type,
            })

            const signedUrl = await getSignedUrl(s3Client, command, {
                expiresIn: 3600,
                // signingRegion: 'us-east-1',
                // signingService: 's3',
            });
            return {
                url: signedUrl,
                key: fileName,
            }
        })
    );

    return uploadUrls;
}

export async function getImages(imageUrls: String[]) {
    
}