import React from 'react';
import RatingCard from "./RatingCard";
import DefaultLayout from "../../layout/DefaultLayout/DefaultLayout";

const ratings = [
  { author: 'MARIA OLIVER', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.' },
  { author: 'MARK JUSTIN', text: 'Cras vel pellentesque odio, in vestibulum dolor. In commodo ligula massa, tristique fermentum enim hendrerit faucibus. Etiam facilisis justo sed tortor vehicula mollis. Duis vel vehicula diam.' },
  { author: 'JAMIE STOCK', text: 'Morbi in leo viverra, elementum risus vitae, commodo lorem. Quisque a mollis.' },
]

const FeaturedRating = () => {
  return (
    <DefaultLayout className={classes.container}>
      {ratings.map((rate) => (
        <RatingCard {...rate} key={rate.author}/>
      ))}
    </DefaultLayout>
  );
};

const classes = {
  container: `
    mt-32
    flex
    gap-2
    flex-col
    md:flex-row
    justify-between`,
}

export default FeaturedRating;