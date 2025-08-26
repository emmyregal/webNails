import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';


export default function ImgList() {


  const itemData = [
    { img: '/pics/n1.jpg' },
    { img: '/pics/n2.jpg' },
    { img: '/pics/n3.jpg' },
    { img: '/pics/n4.jpg' },
    { img: '/pics/n5.jpg' },
    { img: '/pics/n6.jpg' },
    { img: '/pics/n7.jpg' },
    { img: '/pics/n8.jpg' },
    { img: '/pics/n9.jpg' },
    { img: '/pics/n10.jpg' },
    { img: '/pics/n11.jpg' },
    { img: '/pics/n12.jpg' },
    { img: '/pics/n13.jpg' },
    { img: '/pics/n14.jpg' },
    { img: '/pics/n15.jpg' },
    { img: '/pics/n16.jpg' },
    { img: '/pics/n17.jpg' },
    { img: '/pics/n18.jpg' },
    { img: '/pics/n19.jpg' },
    { img: '/pics/n20.jpg' },
    { img: '/pics/n21.jpg' },
    { img: '/pics/n22.jpg' },
    { img: '/pics/n23.jpg' },
    { img: '/pics/n24.jpg' },
    { img: '/pics/n25.jpg' },
    { img: '/pics/n26.jpg' },
    { img: '/pics/n27.jpg' },
    { img: '/pics/n28.jpg' },
    { img: '/pics/n29.jpg' },
    { img: '/pics/n30.jpg' },
    { img: '/pics/n31.jpg' },
    { img: '/pics/n32.jpg' },
    { img: '/pics/n33.jpg' },
    { img: '/pics/n34.jpg' },
    { img: '/pics/n35.jpg' },
    { img: '/pics/n36.jpg' },
    { img: '/pics/n37.jpg' },
    { img: '/pics/n38.jpg' },
    { img: '/pics/n39.jpg' },
    { img: '/pics/n40.jpg' },
    { img: '/pics/n41.jpg' },
    { img: '/pics/n42.jpg' },
    { img: '/pics/n43.jpg' },
    { img: '/pics/n44.jpg' },
    { img: '/pics/n45.jpg' },
    { img: '/pics/n46.jpg' },
    { img: '/pics/n47.jpg' },
    { img: '/pics/n48.jpg' },
    { img: '/pics/n49.jpg' },
    { img: '/pics/n50.jpg' },
    { img: '/pics/n51.jpg' },
    { img: '/pics/n52.jpg' },
    { img: '/pics/n53.jpg' },
    { img: '/pics/n54.jpg' },
    { img: '/pics/n55.jpg' },
    { img: '/pics/n56.jpg' },
    { img: '/pics/n57.jpg' },
    { img: '/pics/n58.jpg' },
    { img: '/pics/n59.jpg' },
    { img: '/pics/n60.jpg' },
    { img: '/pics/n61.jpg' },
    { img: '/pics/n62.jpg' },
    { img: '/pics/n63.jpg' },
    { img: '/pics/n64.jpg' },
    { img: '/pics/n65.jpg' },
    { img: '/pics/n66.jpg' },
    { img: '/pics/n67.jpg' },
    { img: '/pics/n68.jpg' },
    { img: '/pics/n69.jpg' },
    { img: '/pics/n70.jpg' },
    { img: '/pics/n71.jpg' },
    { img: '/pics/n72.jpg' },
    { img: '/pics/n73.jpg' },
    { img: '/pics/n74.jpg' },
    { img: '/pics/n75.jpg' },
    { img: '/pics/n76.jpg' },
    { img: '/pics/n77.jpg' },
    { img: '/pics/n78.jpg' },
    { img: '/pics/n79.jpg' },
    { img: '/pics/n80.jpg' },
    { img: '/pics/n81.jpg' },
    { img: '/pics/n82.jpg' },
    { img: '/pics/n83.jpg' },
    { img: '/pics/n84.jpg' },
    { img: '/pics/n85.jpg' },
    { img: '/pics/n86.jpg' },
    { img: '/pics/n87.jpg' },
    { img: '/pics/n88.jpg' },
    { img: '/pics/n89.jpg' },
    { img: '/pics/n90.jpg' },
    { img: '/pics/n91.jpg' },
    { img: '/pics/n92.jpg' },
    { img: '/pics/n93.jpg' },
    { img: '/pics/n94.jpg' },
    { img: '/pics/n95.jpg' },
    { img: '/pics/n96.jpg' },
    { img: '/pics/n97.jpg' },
    { img: '/pics/n98.jpg' },
    { img: '/pics/n99.jpg' },
    { img: '/pics/n100.jpg' },

    { img: '/pics/n101.jpg' },
    { img: '/pics/n102.jpg' },
    { img: '/pics/n103.jpg' },
    { img: '/pics/n104.jpg' },
    { img: '/pics/n105.jpg' },
    { img: '/pics/n106.jpg' },
    { img: '/pics/n107.jpg' },
    { img: '/pics/n108.jpg' },
    { img: '/pics/n109.jpg' },
    { img: '/pics/n110.jpg' },
    { img: '/pics/n111.jpg' },
    { img: '/pics/n112.jpg' },
    { img: '/pics/n113.jpg' },
    { img: '/pics/n114.jpg' },
    { img: '/pics/n115.jpg' },
    { img: '/pics/n116.jpg' },
    { img: '/pics/n117.jpg' },
    { img: '/pics/n118.jpg' },
    { img: '/pics/n119.jpg' },
    { img: '/pics/n120.jpg' },
    { img: '/pics/n121.jpg' },
    { img: '/pics/n122.jpg' },
    { img: '/pics/n123.jpg' },
    { img: '/pics/n124.jpg' },
    { img: '/pics/n125.jpg' },
    { img: '/pics/n126.jpg' },
    { img: '/pics/n127.jpg' },
    { img: '/pics/n128.jpg' },
    { img: '/pics/n129.jpg' },
    { img: '/pics/n130.jpg' },
    { img: '/pics/n131.jpg' },
    { img: '/pics/n132.jpg' },
    { img: '/pics/n133.jpg' },
    { img: '/pics/n134.jpg' },
    { img: '/pics/n135.jpg' },
    { img: '/pics/n136.jpg' },
    { img: '/pics/n137.jpg' },
    { img: '/pics/n138.jpg' },
    { img: '/pics/n139.jpg' },
    { img: '/pics/n140.jpg' },
    { img: '/pics/n141.jpg' },
    { img: '/pics/n142.jpg' },
    { img: '/pics/n143.jpg' },
    { img: '/pics/n144.jpg' },
    { img: '/pics/n145.jpg' },
    { img: '/pics/n146.jpg' },
    { img: '/pics/n147.jpg' },
    { img: '/pics/n148.jpg' },
    { img: '/pics/n149.jpg' },
    { img: '/pics/n150.jpg' },
    { img: '/pics/n151.jpg' },
  ];

  return (
    <ImageList
      // cols={Math.floor(window.innerWidth / 200)} //had to change this to fix hydration issue
      cols={4}
      rowHeight={200}
      gap={8}
      sx={{ width: '100%', height: '100%' }}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <Image
            src={item.img}
            alt={`${item.img}`}
            width={1188}
            height={1188}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );


}