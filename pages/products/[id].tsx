import React from 'react';
import PageLayout from "../../src/components/layout/PageLayout/PageLayout";
import {getAllCategories, getSingleCategory} from "../../src/database/categories";
import {getAllProducts, getSingleProduct} from "../../src/database/products";
import DefaultLayout from "../../src/components/layout/DefaultLayout/DefaultLayout";
import ProductPage from "../../src/components/productPage";

const Product = ({ categories, product }: any) => {
  console.log({ product })
  return (
    <PageLayout categories={categories}>
      <ProductPage {...product} categories={categories}/>
    </PageLayout>
  );
};

export const getStaticPaths = async () => {
  const { data: products } = await getAllProducts();

  const paths = products?.map((product) =>({
    params: { id: String(product.id) }
  }))

  return { paths, fallback: false }
};

export const getStaticProps = async ({ params }: any) => {
  const { id } = params;
  const { data: categories } =  await getAllCategories();
  let { data: product } = await getSingleProduct(id) as any;
  product = product[0];

  return {
    props: {
      categories,
      product,
    }
  }
}

export default Product;