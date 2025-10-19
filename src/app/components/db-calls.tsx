'use server'

import prisma from "@/lib/prisma";
import { generateUrls } from "../api/upload-image";

export const createNewAppt = async (date: Date, type: string, comments: string, phoneNumber: string, files: File[] | null) => {
    const hoursDiff = Math.abs(date.getUTCHours() - date.getHours());
    date.setHours(date.getHours() - hoursDiff) //need to manually adjust for timezone bc of funky db datetime formatting

    const newAppointment = await prisma.appointment.create({
        data: {
            date: date,
            type: type,
            comments: comments,
            phone_number: phoneNumber,
            // inspo_pics: file_strings,
        },
    })

    // console.log(`new date: ${date}`) 
    const file_strings: string[] = [];
    if (files != null) {
        const uploadUrls = await generateUrls(files, newAppointment.id);
        console.log(`urls: ${uploadUrls.map(url => url.url)}`);
        await Promise.all(
            uploadUrls.map(async (uploadData, index) => {
                const file: File = files[index];
                const response = await fetch(uploadData.url, {
                    method: 'PUT',
                    body: file,
                    headers: {
                        "Content-Type": file.type,
                    },
                });

                if (!response.ok) {
                    throw new Error(
                        `Failed to upload image: ${response.status}`
                    )
                } else {
                    // image was successfully posted to s3 bucket
                    file_strings.push(uploadData.url);
                }
            })
        )
    }
    
    const updatedAppt = await prisma.appointment.update({
        where: {
            id : newAppointment.id,
        },
        data: {
            inspo_pics: file_strings,
        }
    })
    
}