import React from 'react';

const WhyChooseUsCard = (props: any) => {
  const { title, description, Icon } = props

  return (
    <div className={classes.container}>
      <Icon size={50} className={classes.icon}/>
      <h2 className={classes.title}>{title}</h2>
      <p className={classes.description}>{description}</p>
    </div>
  );
};

const classes = {
  container: `
    px-4
    py-6
    flex
    flex-col
    justify-center
    items-center
    gap-4
    w-full
    md:w-[23%]`,
  title: `
    md:text-basis
    font-bold`,
  description: `
    text-xs
    text-center
    text-gray-500`,
  icon: `
    text-primary`,
}


export default WhyChooseUsCard;