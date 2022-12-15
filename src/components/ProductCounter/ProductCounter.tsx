import React, {useState} from 'react';

const ProductCounter = () => {
  const [counter, setCounter] = useState(0);

  const onChange = (e: any) => {
    setCounter(e.target.value)
  };

  const add = () => setCounter(counter => ++counter);
  const subtract = () => setCounter(counter => --counter);

  return (
    <div className={classes.container}>
      <div className={classes.counter + classes.minus} onClick={subtract}>-</div>
      <input min={0} className={classes.input} value={counter} onChange={onChange}/>
      <div className={classes.counter + classes.plus} onClick={add}>+</div>
    </div>
  );
};

const classes = {
  container: `
    flex`,
  counter: `
    px-3
    py-1
    border-2
    cursor-pointer`,
  minus: `
    border-r-0`,
  plus: `
    border-l-0`,
  input: `
    border-2
    w-14
    text-center`,
}

export default ProductCounter;