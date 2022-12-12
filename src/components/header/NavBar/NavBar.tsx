import React, {useEffect, useState} from "react";
import NavItem from "../NavItem/NavItem";

const NavBar = ({ isMenuOpen, categories }: any) => {
  const menuStatus = isMenuOpen ? 'open' : 'close';

  return (
      <div className={classes.container + classes.menu[menuStatus]}>
          {categories?.map((category: any) => (
              <div className="hover:text-white" key={category.id}>
                  <NavItem {...category} />
              </div>
          ))}
      </div>
  )
}

const classes = {
  container: `
        flex
        flex-col 
        md:flex-row 
        justify-center 
        flex-wrap
        md:flex`,
  menu: {
    open: `
      absolute 
      z-10 
      w-full 
      left-0 bg-white
      top-14`,
    close: `
      hidden
      `,
  }

}

export default NavBar;