import React, {useEffect, useState} from 'react';
import {getProductsByCategoryId} from "../../../database/categories";
import Products from "../../product/Products/Products";
import ProductSkeleton from "../../skeleton/ProductSkeleton";

const RelatedProducts = ({ productId, categoryId }: any) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getRelatedProducts = async () => {
    setIsLoading(true)
    const { data } = await getProductsByCategoryId(productId, categoryId) as any

    setRelatedProducts(data)
    setIsLoading(false)
  };

  useEffect(() => {
    getRelatedProducts();
  }, [])

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>RELATED PRODUCTS</h2>
      {isLoading ? <ProductSkeleton count={3}/> : <Products products={relatedProducts}/>}
    </div>
  );
};

const classes = {
  container: `
    mt-20`,
  title: `
    text-xl
    font-bold`,
};

export default RelatedProducts;