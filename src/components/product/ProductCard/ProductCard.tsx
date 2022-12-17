import React, {useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import ProductDescription from "./ProductDescription";
import ProductViewModal from "../ProductViewModal/ProductViewModal";
import {useRouter} from "next/router";

const ProductCard = (props: any) => {
  const { id, name, image, price } = props;

  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClose = () => setIsModalOpen(false);
  const onOpen = () => setIsModalOpen(true);

  const handleQuickViewClick = (e: any) => {
    e.stopPropagation();
    onOpen();
  }

  const handleNavigate = () => {
    return router.push(`/products/${id}`)
  }

  const productDescriptionProps = {
    name,
    price,
  }

  return (
    <>
      <div className={classes.container} onClick={handleNavigate}>
        <Image className={classes.image} src={image} alt={name} width={400} height={500}/>
        <div className={classes.content}>
          <h3 className={classes.quickViewBtn} onClick={handleQuickViewClick}>Quick View</h3>
        </div>
        <ProductDescription {...productDescriptionProps}/>
        <div className={classes.sale}>
          <p>Sale</p>
        </div>
      </div>
      <ProductViewModal isModalOpen={isModalOpen} onClose={onClose} product={props}/>
    </>
  );
}

const classes = {
  container: `
    md:w-[32%]
    w-[48%]
    relative
    flex
    flex-col
    justify-center
    h-fit
    group
    cursor-pointer
    `,
  image: `
    w-full`,
  content: `
    absolute
    w-full
    bg-black
    hidden
    text-white
    left-0
    bottom-20
    text-center
    p-2
    group-hover:block`,
  quickViewBtn: `
    md:sm
    text-xs`,
  products: `
    text-gray-400
    text-xs`,
  sale: `
    absolute
    w-10
    h-10
    bg-primary
    flex
    justify-center
    items-center
    text-xs
    rounded-full
    top-[-8px]
    right-[-8px]`,
}

export default ProductCard;