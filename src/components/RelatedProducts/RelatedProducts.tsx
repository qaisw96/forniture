import React, {useEffect, useState} from 'react';
import {getProductsByCategoryId} from "../../database/categories";
import Products from "../Products/Products";

const RelatedProducts = ({ productId, categoryId }: any) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  const getRelatedProducts = async () => {
    const { data } = await getProductsByCategoryId(productId, categoryId) as any

    setRelatedProducts(data)
  };

  console.log({productId})


  useEffect(() => {
    getRelatedProducts();
  }, [])

  return (
    <div className={classes.container}>
      <h2>RELATED PRODUCTS</h2>
      <Products products={relatedProducts}/>
    </div>
  );
};

const classes = {
  container: ``,
};

export default RelatedProducts;