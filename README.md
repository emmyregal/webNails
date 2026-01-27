## Next Steps:
+ finish up home page styles ( emmy )
+ admin dashboard ( emmy )
+ venmo plugin/captcha - don't send appt to db unless payment is valid ( emmy )
+ block off time availability ( also add input validation for all required fields )

## Tools/Components:
+ https://mui.com/x/react-date-pickers/date-time-picker/
+ venmo "captcha": `npm install @paypal/react-paypal-js`


## Scripts

To delete past appointments from the database run the command: 

`npx tsx scripts/deletePastApps.ts`

## Database

This site uses [Prisma Postgres](https://www.prisma.io/postgres). Set-up instructions are below:

### Install dependencies:
Run the following in a terminal in your directory that contains package.json (the directory w/ all the code):

+ `npm i prisma`

+ `npm i @prisma/client`

#### After those are installed:
Create a file called .env with the following one line:

`DATABASE_URL=`

This is the URL that will connect to a running instance of our database. The actual value is confidential.

On initial set-up, run the command: 

+ `npx primsa generate`

### Using the DB:
After any changes to the schema:
+ `npx migrate dev --name {the name of the migration}`

To view the DB: 
+ `npx prisma studio`


## Init setup:

(below is auto-generated)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
