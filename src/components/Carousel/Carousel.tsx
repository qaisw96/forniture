import React from 'react';
import { Carousel } from 'antd';
import Image from "next/image";

const imageUrl = 'https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/hero-01.jpg';

const images = [
    { key: 'FIRST', src: imageUrl, alt: 'FIRST' },
    { key: 'SECOND', src: imageUrl, alt: 'SECOND' },
    { key: 'THIRD', src: imageUrl, alt: 'THIRD' },
]

const CustomCarousel = () => {
    const onChange = (currentSlide: number) => {
        // console.log(currentSlide);
    };

    return (
      <Carousel afterChange={onChange} autoplay>
          {images.map((image) => (
            <div>
                <Image src={image.src} alt={image.alt} width={1000} height={500} className='w-full md:h-[80vh]'/>
            </div>
          ))}
      </Carousel>
    );
};

export default CustomCarousel;