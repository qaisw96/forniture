import React from 'react';
import DefaultLayout from "../layout/DefaultLayout/DefaultLayout";
import Image from "next/image";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import {Button, Divider} from "antd";
import ProductCounter from "../ProductCounter/ProductCounter";

const ProductPage = ({ image, name, price, description, categoryId, categories }: any) => {
  const category = categories.find((category: any) => category.id === categoryId);
  const words = [
    { text: 'Home', link: '/' },
    { text: category.name, link: `/product-category/${category.slug}`},
    { text: name, link: `` }
  ]

  return (
    <DefaultLayout className={classes.container}>
      <Image className={classes.image} src={image} alt={image} width={500} height={800}/>
      <div className={classes.right}>
        <BreadCrumb words={words} />
        <h2 className={classes.name}>{name}</h2>
        <h2 className={classes.price}>${price + '.00'}<span className={classes.ship}> & Free Shipping</span></h2>
        <p className={classes.description}>{description}</p>
        <Divider />
        <div className={classes.counter}>
          <ProductCounter/>
          <Button size="large">
            Add To Cart
          </Button>
        </div>
      </div>
    </DefaultLayout>
  );
};

const classes = {
  container: `
    mt-20
    flex
    gap-16`,
  image: `
    basis-1/2`,
  right: `
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
  description: ``,
  counter: `
    flex
    gap-8`,
}

export default ProductPage;