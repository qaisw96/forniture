import React from 'react';
import PageLayout from "../../src/components/layout/PageLayout/PageLayout";
import {getAllCategories, getSingleCategory} from "../../src/database/categories";
import DefaultLayout from "../../src/components/layout/DefaultLayout/DefaultLayout";
import CategoryPageHeader from "../../src/components/CategoryPageHeader/CategoryPageHeader";
import Products from "../../src/components/Products/Products";

const Index = ({ categories, category }: any) => {
  return (
    <PageLayout categories={categories}>
      <DefaultLayout>
        <CategoryPageHeader category={category}/>
        <Products products={category.products} />
      </DefaultLayout>
    </PageLayout>
  );
};

export const getStaticPaths = async () => {
  const { data } = await getAllCategories() as any;

  const categories = data.map((category: any) =>({
    params: { id: category.slug }
  }))

  return { paths: categories, fallback: false }
};

export const getStaticProps = async ({ params }: any) => {
  const { id } = params;

  let { data: category } =  await getSingleCategory(id) as any;
  category = category[0]
  const { data: categories } =  await getAllCategories();

  return {
    props: {
      categories,
      category,
    }
  }
}

export default Index;