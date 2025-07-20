'use client'

import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Box, Paper } from '@mui/material'
import Image from 'next/image'


const items = [
    {
        href: '/pics/n1.png',
        alt: 'nails 1'
    },
    {
        href: '/pics/n2.png',
        alt: 'nails 2'
    },
    {
        href: '/pics/n3.png',
        alt: 'nails 3'
    },
    {
        href: '/pics/n4.png',
        alt: 'nails 4'
    },
    {
        href: '/pics/n5.png',
        alt: 'nails 5'
    },
    {
        href: '/pics/n6.png',
        alt: 'nails 6'
    },
    {
        href: '/pics/n7.png',
        alt: 'nails 7'
    },
]

export default function CarouselComponent() {

    return (
        <Paper sx={{height: '100%'}}>
        <Carousel>
            {
                items.map((item, i) => (
                    <Box justifyContent={'center'} alignItems="center" display="flex" width={'100%'}>
                        <Image
                            src={item.href}
                            width={500}
                            height={500}
                            alt={item.alt}
                        />
                    </Box>
                ))
            }
        </Carousel>
        </Paper>
    )
}