'use client'

import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Image from 'next/image'


const items = [
    {
        href: '/pics/n1.jpg',
        alt: 'nails 1'
    },
    {
        href: '/pics/n2.jpg',
        alt: 'nails 2'
    },
    {
        href: '/pics/n3.jpg',
        alt: 'nails 3'
    },
    {
        href: '/pics/n4.jpg',
        alt: 'nails 4'
    },
    {
        href: '/pics/n5.jpg',
        alt: 'nails 5'
    },
    {
        href: '/pics/n6.jpg',
        alt: 'nails 6'
    },
    {
        href: '/pics/n7.jpg',
        alt: 'nails 7'
    },
]

export default function CarouselComponent() {

    return (
        <Carousel>
            {
                items.map((item, i) => (
                    <Image
                        src={item.href}
                        width={500}
                        height={500}
                        alt={item.alt}
                    />
                ))

            }
        </Carousel>
    )
}