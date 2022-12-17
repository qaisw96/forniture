import React from 'react';
import { AiFillStar } from 'react-icons/ai'
import DefaultLayout from "../../layout/DefaultLayout/DefaultLayout";
import category from "../../categories/Category/Category";

const RatingCard = ({ author, text }: any) => {
  return (
    <div className={classes.container}>
      <div className={classes.stars}>
        <AiFillStar className={classes.star}/>
        <AiFillStar className={classes.star}/>
        <AiFillStar className={classes.star}/>
        <AiFillStar className={classes.star}/>
        <AiFillStar className={classes.star}/>
      </div>
      <h3 className={classes.text}>{text}</h3>
      <p className={classes.author}>{author}</p>
    </div>
  );
};

const classes = {
  container: `
    px-8
    py-12
    flex
    flex-col
    justify-center
    items-center
    gap-4
    bg-third
    w-full
    md:w-[33%]`,
  stars: `
    flex
    gap-1
    `,
  star: `
    fill-yellow-500`,
  text: `
    font-bold
    text-lg
    text-center`,
  author: `
    text-sm
    text-gray-500`,
}

export default RatingCard;