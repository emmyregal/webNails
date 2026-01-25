'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../globals.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import { Box } from '@mui/material';

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


export default function ImageSwiper() {
    return (
        <>
            <Swiper
                style={{ '--swiper-theme-color': 'white' } as React.CSSProperties}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                
                modules={[Autoplay, Pagination]} className="mySwiper">
                {items.map((item, i) => (
                    // <Box justifyContent={'center'} alignItems="center" display="flex" width={'100%'}>
                    <SwiperSlide key={i}>
                        <img
                            src={item.href}
                            loading='lazy'
                        />
                    </SwiperSlide>
                    // </Box>
                ))}
            </Swiper>
        </>
    );
}
