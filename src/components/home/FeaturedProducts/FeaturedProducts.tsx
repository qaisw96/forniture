import React, {useState} from 'react';
import DefaultLayout from "../../layout/DefaultLayout/DefaultLayout";
import SectionHeader from "../SectionHeader/SectionHeader";
import Products from "../../product/Products/Products";
import ProductViewModal from "../../product/ProductViewModal/ProductViewModal";

const FeaturedProducts = ({ featuredProducts }: any) => {
  return (
    <DefaultLayout className={classes.container}>
      <SectionHeader title="FEATURED PRODUCTS" subtitle="SHOP BY CATEGORY"/>
      <Products products={featuredProducts}/>
    </DefaultLayout>
  );
};

const classes = {
  container: `
    mt-32`,
};

export default FeaturedProducts;