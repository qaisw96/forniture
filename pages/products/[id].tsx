import React from 'react';
import PageLayout from "../../src/components/layout/PageLayout/PageLayout";
import {getAllCategories, getSingleCategory} from "../../src/database/categories";
import {getAllProducts, getSingleProduct} from "../../src/database/products";
import DefaultLayout from "../../src/components/layout/DefaultLayout/DefaultLayout";
import ProductInfo from "../../src/components/product/ProductInfo/ProductInfo";
import ProductCollapse from "../../src/components/product/ProductCollapse/ProductCollapse";
import RelatedProducts from "../../src/components/categories/RelatedProducts/RelatedProducts";
import ProductViewModal from "../../src/components/product/ProductViewModal/ProductViewModal";

const Product = ({ categories, product }: any) => {
  const { id: productId, categoryId, name, price, image,description } = product;
  const category = categories.find((category: any) => category.id === categoryId);

  const productInfoProps = {
    category,
    price,
    name,
    description,
    image
  };

  return (
    <PageLayout categories={categories}>
      <DefaultLayout>
        <ProductInfo {...productInfoProps} />
        <ProductCollapse/>
        <RelatedProducts categoryId={categoryId} productId={productId}/>
      </DefaultLayout>
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