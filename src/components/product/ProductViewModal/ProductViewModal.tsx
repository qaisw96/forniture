import React, {useState} from 'react';
import {Divider, Modal} from "antd";
import ProductInfo from "../ProductInfo/ProductInfo";
import Image from "next/image";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import ProductCounter from "../ProductCounter/ProductCounter";

const ProductViewModal = ({ onClose, isModalOpen, product }: any) => {
  const { name, description, price, image } = product;

  return (
    <Modal width={1000} title={null} open={isModalOpen} onCancel={onClose} footer={null}>
      <div className={classes.container}>
        <Image className={classes.image} src={image} alt={image} width={500} height={800}/>
        <div className={classes.info}>
          <h2 className={classes.name}>{name}</h2>
          <h2 className={classes.price}>${price + '.00'}<span className={classes.ship}> & Free Shipping</span></h2>
          <p className={classes.description}>{description}</p>
        </div>
      </div>
    </Modal>
  );
};

const classes = {
  container: `
    p-8
    flex
    flex-col
    items-center
    md:flex-row
    gap-16`,
  image: `
    basis-1/2`,
  info: `
    basis-1/2
    flex
    flex-col
    gap-4`,
  name: `
    text-3xl`,
  price: `
    text-2xl
    text-primary`,
  ship: `
    text-sm
    text-black`,
  description: `
    text-sm
    leading-7
    tracking-wider
    text-gray-500`,
}

export default ProductViewModal;