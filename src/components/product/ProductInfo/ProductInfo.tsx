import React from 'react';
import Image from "next/image";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import {Divider} from "antd";
import ProductCounter from "../ProductCounter/ProductCounter";

const ProductInfo = ({ category, price, name, description, image }: any) => {
  const words = [
    { text: 'Home', link: '/' },
    { text: category.name.toLowerCase(), link: `/product-category/${category.slug}`},
    { text: name, link: `` }
  ]

  return (
      <div className={classes.container}>
        <Image className={classes.image} src={image} alt={image} width={500} height={800}/>
        <div className={classes.info}>
          <BreadCrumb words={words} />
          <h2 className={classes.name}>{name}</h2>
          <h2 className={classes.price}>${price + '.00'}<span className={classes.ship}> & Free Shipping</span></h2>
          <p className={classes.description}>{description}</p>
          <Divider />
          <div className={classes.counter}>
            <ProductCounter/>
          </div>
        </div>
      </div>
  );
};

const classes = {
  container: `
    mt-20
    flex
    flex-col
    items-center
    md:flex-row
    md:items-start
    gap-16`,
  image: `
    basis-1/2`,
  info: `
    basis-1/2
    flex
    flex-col
    gap-4`,
  name: `
    text-3xl`,
  price: `
    text-2xl
    text-primary`,
  ship: `
    text-sm
    text-black`,
  description: `
    text-sm
    leading-7
    tracking-wider
    text-gray-500`,
  counter: `
    flex
    gap-8`,
}

export default ProductInfo;