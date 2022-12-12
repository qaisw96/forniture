import React from 'react';
import {BiSearchAlt} from "react-icons/bi";
import {AiOutlineMenu, AiOutlineShopping} from "react-icons/ai";
import {GrClose} from "react-icons/gr";

const HeaderIcons = (props: any) => {
  const { isMenuOpen, handleToggle} = props;
  return (
    <div className={classes.container}>
      <BiSearchAlt size={30} className={classes.icon}/>
      <AiOutlineShopping size={30} className={classes.icon + classes.basket}/>
      <div onClick={handleToggle} className={classes.icon + classes.menuIcon}>
        {isMenuOpen ? <GrClose size={30}/> : <AiOutlineMenu size={30} />}
      </div>
    </div>
  );
};

const classes = {
  container: `
    flex
    gap-2`,
  icon: `
    cursor-pointer`,
  basket: `
    fill-primary`,
  menuIcon: `
    ml-2
    md:hidden`
}

export default HeaderIcons;