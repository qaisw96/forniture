import React from 'react';
import Skeleton from "react-loading-skeleton";

const ProductSkeleton = ({ count }: any) => {
  const cards = Array(count).fill(0);
  return (
    <div className={classes.container}>
      {cards.map((card, index) => (
        <div className={classes.skeleton} key={index}>
          <Skeleton height={300}/>
        </div>
      ))}
    </div>
  );
};

const classes = {
  container: `
    mt-12
    flex
    flex-wrap
    flex-col
    md:flex-row
    gap-2
    justify-between`,
  skeleton: `
    w-full
    md:w-[32%]`,
}
export default ProductSkeleton;