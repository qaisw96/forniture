import React from 'react';
import Category from "../Category/Category";
import DefaultLayout from "../layout/DefaultLayout/DefaultLayout";
import SectionHeader from "../SectionHeader/SectionHeader";

const Categories = ({ categories }: any) => {
  return (
    <DefaultLayout className={classes.container}>
       <SectionHeader title="SHOP BY CATEGORY" subtitle="SHOP BY CATEGORY" />
        <div className={classes.categories}>
          {categories.map((category: any) => (
            <Category {...category} key={category.id}/>
          ))}
        </div>
    </DefaultLayout>
  );
};

const classes = {
  container: `
    mt-32`,
  categories: `
    mt-12
    flex
    flex-row
    gap-2
    flex-wrap
    justify-between`,
};

export default Categories;