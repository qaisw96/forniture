import React from 'react';
import DefaultLayout from "../layout/DefaultLayout/DefaultLayout";
import Link from "next/link";
import {Input, Button} from "antd";

const links = [
    {mame: 'About', link: ''},
    {mame: 'Contact', link: ''},
    {mame: 'Help', link: ''},
];

const Footer = ({ categories }: any) => {
  console.log(categories)
    return (
      <DefaultLayout className={classes.container}>
        <div className={classes.top}>
          <div className={classes.logo}>
              <h2>FORNITURE</h2>
          </div>
          <div className={classes.links}>
            <h3 className={classes.title}>LINKS</h3>
            {links.map((link) => (
              <Link href={link.link} className={classes.link} key={link.mame}>
                {link.mame}
              </Link>
            ))}
          </div>
          <div className={classes.categories}>
            <h3 className={classes.title}>CATEGORIES</h3>
            {categories.map((category: any) => (
              <Link href={`product-category/${category.slug}`} className={classes.link} key={category.id}>
                {category.name}
              </Link>
            ))}
          </div>
          <div className={classes.subscribe}>
            <h3 className={classes.title}>SUBSCRIBE</h3>
            <Input placeholder="Your email address" className={classes.SubscribeInput}/>
            <Button className={classes.subscribeBtn}>Subscribe</Button>
          </div>
        </div>
        <div className={classes.bottom}>

        </div>
      </DefaultLayout>
    );
};

const classes = {
  container: `
    mt-28
    bg-third
    py-20`,
  top: `
    flex
    flex-col
    items-center
    md:items-start
    md:flex-row
    md:justify-between
    flex-wrap`,
  bottom: ``,
  title: `
    text-sm
    md:mb-8
    mb-2
    mt-8
    md:mt-0`,
  logo: ``,
  links: `
    flex
    flex-col
    gap-2
    items-center`,
  categories: `
    flex
    flex-col
    gap-2
    items-center`,
  subscribe: `
    w-full
    md:w-fit
    flex
    flex-col
    gap-2
    items-center`,
  link: `
    text-sm
    text-primary`,
  SubscribeInput: `
    h-[42px]
    w-[90%]`,
  subscribeBtn: `
    h-[42px]`
};

export default Footer;