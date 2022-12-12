import React from 'react';

const ProductDescription = ({ name, price }: any) => {
  return (
    <div className={classes.container}>
      <h2 className={classes.name}>{name}</h2>
      <h3 className={classes.price}>${price}</h3>
    </div>
  );
};

const classes = {
  container: `
    flex
    flex-col
    items-center
    bg-secondary
    gap-3
    pb-4`,
  name: `
    text-sm
    md:text-xl`,
  price: `
    text-primary
    text-sm
    font-bold`,
}

export default ProductDescription;