import React from 'react';

const SectionHeader = ({ title, subtitle }: any) => {
  return (
    <div className={classes.header}>
      <p className={classes.subTitle}>SHOP BY CATEGORY</p>
      <p className={classes.title}>FEATURED PRODUCTS</p>
      <div className={classes.divider}/>
    </div>
  );
};

const classes = {
  header: `
    flex
    flex-col
    items-center
    gap-4`,
  title: `
    md:text-4xl
    text-xl`,
  subTitle: `
    text-gray-400`,
  divider: `
    w-14
    h-[1px]
    bg-gray-300`,
}

export default SectionHeader;