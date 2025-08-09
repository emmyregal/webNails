## Database

### Install dependencies:
Run the following in a terminal in your directory that contains package.json (the directory w/ all the code):

`npm i prisma --legacy-peer-deps`

`npm i @prisma/client --legacy-peer-deps`

you may or may not need the `--legacy-peer-deps`, I needed them and I believe some version issues exist is the carosel component that I'll take a look at. 

#### After those are installed:
Create a file called .env with the following one line:

`DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/postgres"`

This is the URL that will connect to a local running instance of our database. 

#### Prisma:
Prisma is the ORM we will be using. ORM means it's pretty much just a nice way to interact with the database.
Here are the getting started docs (I've done up through step 2.3): [Prisma Docs](https://www.prisma.io/docs/guides/nextjs)

Up to step 2.3 (what I've done so far): Created the initial schema. You'll find it under prisma/schema.prisma. All thats there so far are the User and Appointment tables (tables are synonomous with models). We can add/change these later.

#### Postgres:
Prisma is just a way to interact with the database, what about the database itself? Enter: [PostgreSQL](https://www.postgresql.org/)

Set up:

To spin up a local postgresql instance, do the following:

+ Open any terminal and make sure you have docker running on your machine (the database will live in a docker container while it is local). 
+ Then run the following commands (taken from [docker hub btw](https://hub.docker.com/_/postgres)):

`docker pull postgres:14.181` or just `docker pull postgres` for mac users

`docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres` (wow great password)


After you run these you will have a local postgres instance set up!

To see the database, install the PostgreSQL VS Code Extention (the one authored by Database Client)

After installing the extention you should see a new database tab open on your left side menu in VS Code. 
+ Click that new database tab. 
+ You should see an option for 'Create Connection' . Click create a connection. 
+ Make sure PostgresSQL is selected as the server type. You can leave all of the defaults.
+ Type 'mysecretpassword' for the password. 
+ Then hit create a connection and it should be successful (lmk if this doesnt work cuz it can get weird sometimes)

#### Adding tables

To add the tables into postgres run the following in a terminal cd'd into the directory with all of the code in it:
(`cd nailsWeb`, `cd prisma`) (needs to find ur schema.prisma file)

`npx prisma migrate dev --name init`

Then, go back to the database tab, open things up until you find the 'Tables' tab. Right click on Tables and hit 'Refresh'. You should now be able to see the tables. 

Thats all for now. Its a lengthy set-up process so lmk if anything goes wrong. Now that its set up we can start using it our code, give me a little more time to work through that next part. 

I DID IT

## Init setup:

How 2 set up:

download node.js: https://nodejs.org/en

run the command: npm install once in project directory 

to view the app, run the command: npm run dev and go to local host in browser (as stated below)

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

finished 2.4 
added seeds/example ppl and appointments 
npm install --save-dev ts-node --legacy-peer-deps
npx prisma generate   
npx prisma db seed 
npx prisma studio //lets you see all the appountments in a browser

i changed the json file to include the prisma seed
made a seed file w random people as examples just like it said in 2.4
updated the schema so it was accurately reflecting appointments 