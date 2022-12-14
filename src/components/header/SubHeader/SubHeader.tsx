import React from 'react';

const SubHeader = () => {
  return (
    <div className={style["container"]}>
      <h3 className={style["item"]}>About</h3>
      <h3 className={style["item"]}>Contact</h3>
      <h3 className={style["item"]}>Help</h3>
    </div>
  );
};

const style = {
  container: `
    hidden
    md:flex
    gap-2 
    justify-end`,
  item: `
    text-[12px] 
    p-2 
    border-b-2
    border-secondary
    hover:text-primary
    cursor-pointer
    transform
    hover:scale-105`
}

export default SubHeader;