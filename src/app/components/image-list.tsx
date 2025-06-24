import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList() {
  return (
    <ImageList sx={{ width: 650, height: 650}} cols={3} rowHeight={200} >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: '/pics/n1.png',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: '/pics/n2.png',
    title: 'Burger',
  },
  {
    img: '/pics/n3.png',
    title: 'Camera',
  },
  {
    img: '/pics/n4.png',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: '/pics/n5.png',
    title: 'Hats',
    cols: 2,
  },
  {
    img: '/pics/n6.png',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: '/pics/n7.png',
    title: 'Basketball',
  },
  {
    img: '/pics/n8.png',
    title: 'Fern',
  },
  {
    img: '/pics/n9.png',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
];
