import React from 'react';
import BreadCrumb from "../../BreadCrumb/BreadCrumb";

const CategoryPageHeader = ({ category }: any) => {
  const { name, products } = category;

  const words = [{ text: 'Home', link: '/' }, { text: name, link: '' }]
  return (
    <div className={classes.container}>
      <BreadCrumb words={words} />
      <h1 className={classes.title}>{name}</h1>
      <div className={classes.footer}>
        <h3 className={classes.subtitle}>Showing all {products.length} results</h3>
        <h3 className={classes.subtitle}>Default Sorting</h3>
      </div>
    </div>
  );
};

const classes = {
  container: `
  mt-14`,
  title: `
    mt-4
    text-2xl`,
  subtitle: `
    text-gray-500
    text-sm`,
  footer: `
    mt-8
    flex
    justify-between`,
}

export default CategoryPageHeader;