import React from 'react';
import Slider from "@ant-design/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ClientsSlider = ({ clients }: any) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
    ]
  };
  return (
    <div className={classes.container}>
      <Slider {...settings}>
        {clients.map((client: any) => (
          <div key={client.id} className={classes.imageContainer}>
            <Image className={classes.image} src={client.image} alt={client.image} width={200} height={100} />
          </div>
          ))}
      </Slider>
    </div>
  );
};

const classes = {
  container: `
    m-4`,
  imageContainer: `
    p-2`,
  image: `
    border-2
    w-full`,
};

export default ClientsSlider;