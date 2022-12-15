import React from 'react';
import ProductCard from "../ProductCard/ProductCard";

const Products = ({ products }: any) => {
  console.log(products)
  return (
    <div className={classes.products}>
      {products.map((product: any) => (
        <ProductCard {...product} key={product.id}/>
      ))}
    </div>
  );
};

const classes = {
  products: `
    mt-12
    flex
    flex-row
    gap-2
    md:gap-4
    flex-wrap
    justify-between`,
};

export default Products;