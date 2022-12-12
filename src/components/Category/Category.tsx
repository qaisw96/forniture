import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Category = (props: any) => {
  const { name, image, slug } = props;

  return (
    <Link className={classes.container} href={`/product-category/${slug}`}>
      <Image src={image} alt={name} width={400} height={500}/>
      <div className={classes.content}>
        <h3 className={classes.name}>{name}</h3>
        <p className={classes.products}>9 Products</p>
      </div>
    </Link>
  );
}

const classes = {
  container: `
    md:w-[23%]
    w-[48%]
    relative
    flex
    justify-center
    h-fit
    `,
  content: `
    absolute
    w-[80%]
    bg-white
    md:bottom-6
    bottom-2
    text-center
    p-2`,
  name: `
    font-bold
    md:text-base
    text-xs`,
  products: `
    text-gray-400
    text-xs`,
}

export default Category;