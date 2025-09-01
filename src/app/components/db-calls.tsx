'use server'

import prisma from "@/lib/prisma";

export const createNewAppt = async (date: Date, type: string) => {
    console.log(`date: ${date}`)
    const newAppointment = await prisma.appointment.create({
            data: {
                date: date,
                type: type,
            },
        })
}