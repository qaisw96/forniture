import React, {useState} from 'react';
import {Button} from "antd";

const ProductCounter = () => {
  const min = 1;
  const max = 100;

  const [counter, setCounter] = useState(0);

  const onChange = (e: any) => {
    const value = Math.max(min, Math.min(max, Number(e.target.value)));
    setCounter(value)
  };

  const add = () => {
    if (counter > 20) return
    setCounter(counter => ++counter);
  }
  const subtract = () => {
    if (counter === 0) return
    setCounter(counter => --counter);
  }

  return (
    <div className={classes.container}>
      <div className={classes.counterContainer}>
        <div className={classes.counter + classes.minus} onClick={subtract}>-</div>
        <input min={min} max={max} type="number" className={classes.input} value={counter} onChange={onChange}/>
        <div className={classes.counter + classes.plus} onClick={add}>+</div>
      </div>
      <Button size="large" className={classes.addBtn} disabled={counter === 0}>
        Add To Cart
      </Button>
    </div>
  );
};

const classes = {
  container: `
    flex
    gap-8`,
  counterContainer: `
    flex`,
  counter: `
    transition-all
    duration-300
    px-4
    py-2
    border-2
    border-primary
    cursor-pointer
    hover:bg-primary
    hover:text-white`,
  minus: `
    border-r-0`,
  plus: `
    border-l-0`,
  input: `
    border-2
    border-primary
    w-14
    text-center`,
  addBtn: `
    rounded-none
    enabled:bg-primary
    enabled:text-white
    h-auto`,
}

export default ProductCounter;