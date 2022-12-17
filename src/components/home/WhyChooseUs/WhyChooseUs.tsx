import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { BsCreditCard } from 'react-icons/bs';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { SlBasket } from 'react-icons/sl';
import WhyChooseUsCard from "./WhyChooseUsCard";
import DefaultLayout from "../../layout/DefaultLayout/DefaultLayout";
import SectionHeader from "../SectionHeader/SectionHeader";

const items = [
  { title: 'Fast Delivery', Icon: TbTruckDelivery ,  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.'},
  { title: 'Free Shipping', Icon: BsCreditCard ,  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.'},
  { title: 'Secure Checkout', Icon: RiSecurePaymentLine,  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.'},
  { title: 'Easy Returns', Icon: SlBasket,  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.'},
];

const WhyChooseUs = () => {
  return (
    <DefaultLayout className={classes.container}>
      <SectionHeader title="WHY CHOOSE US" subTitle="BEST PRODUCTS"/>
      <div className={classes.cards}>
        {items.map((item) => (
          <WhyChooseUsCard {...item} key={item.title}/>
        ))}
      </div>
    </DefaultLayout>
  );
};

const classes = {
  container: `
    mt-32`,
  cards: `
    mt-12
    flex
    gap-2
    flex-col
    md:flex-row
    justify-between`,
};

export default WhyChooseUs;