import React from 'react';
import DefaultLayout from "../layout/DefaultLayout/DefaultLayout";
import Image from "next/image";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import {Button, Divider} from "antd";
import ProductCounter from "../ProductCounter/ProductCounter";
import ProductCollapse from "../ProductCollapse/ProductCollapse";
import RelatedProducts from "../RelatedProducts/RelatedProducts";

const ProductPage = ({ id: productId, image, name, price, description, categoryId, categories }: any) => {
  const category = categories.find((category: any) => category.id === categoryId);
  const words = [
    { text: 'Home', link: '/' },
    { text: category.name.toLowerCase(), link: `/product-category/${category.slug}`},
    { text: name, link: `` }
  ]

  return (
    <DefaultLayout className={classes.container}>
      <div className={classes.headerContainer}>
        <Image className={classes.image} src={image} alt={image} width={500} height={800}/>
        <div className={classes.right}>
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
      <div className={classes.collapse}>
        <ProductCollapse/>
      </div>
      <div className={classes.collapse}>
        <RelatedProducts categoryId={categoryId} productId={productId}/>
      </div>
    </DefaultLayout>
  );
};

const classes = {
  container: `
    mt-20`,
  headerContainer: `
    flex
    flex-col
    items-center
    md:flex-row
    md:items-start
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
  description: `
    text-sm
    leading-7
    tracking-wider
    text-gray-500`,
  counter: `
    flex
    gap-8`,
  collapse: `
    mt-20`,
}

export default ProductPage;