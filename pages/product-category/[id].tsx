import React from 'react';
import PageLayout from "../../src/components/layout/PageLayout/PageLayout";
import {getAllCategories, getSingleCategory} from "../../src/database/categories";
import BreadCrumb from "../../src/components/BreadCrumb/BreadCrumb";

const Index = ({ categories, category }: any) => {
  console.log(category)
  return (
    <PageLayout categories={categories}>
      <BreadCrumb words={['word1, word2']} />
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

  const { data: category } =  await getSingleCategory(id);
  const { data: categories } =  await getAllCategories();

  return {
    props: {
      categories,
      category,
    }
  }
}

// export const getServerSideProps = async ({ params }: any) => {
//   const { id } = params;
//   const { data: categories } =  await getAllCategories();
//   const { data: category } =  await getSingleCategory(id);
//
//   return {
//     props: {
//       categories,
//       category,
//     }
//   }
// }

export default Index;