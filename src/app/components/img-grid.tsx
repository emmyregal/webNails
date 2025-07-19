import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


export default function ImgList() {
    return (
      <ImageList
        cols={Math.floor(window.innerWidth / 200)}
        rowHeight={200}
        gap={8}
        sx={{ width: '100%', height: '100%' }}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={item.img}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }

const itemData = [
  {
    img: '/pics/n1.jpg',
  },
  {
    img: '/pics/n2.jpg',
  },
  {
    img: '/pics/n3.jpg',
  },
  {
    img: '/pics/n4.jpg',
  },
  {
    img: '/pics/n5.jpg',
  },
  {
    img: '/pics/n6.jpg',
  },
  {
    img: '/pics/n7.jpg',
  },
  {
    img: '/pics/n8.jpg',
  },
  {
    img: '/pics/n9.jpg',
  },
  {
    img: '/pics/n10.jpg',
  },
  {
    img: '/pics/n11.jpg',
  },
  {
    img: '/pics/n12.jpg',
  },
  {
    img: '/pics/n13.jpg',
  },
  {
    img: '/pics/n14.jpg',
  },
  {
    img: '/pics/n15.jpg',
  },
  {
    img: '/pics/n16.jpg',
  },

];
