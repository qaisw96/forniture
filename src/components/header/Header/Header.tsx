import React from 'react';
import DefaultLayout from "../../layout/DefaultLayout/DefaultLayout";
import NavBar from "../NavBar/NavBar";
import SubHeader from "../SubHeader/SubHeader";
import HeaderIcons from "./HeaderIcons";
import Logo from "./Logo";

const Header = (props: any) => {
  const { handleToggle, isMenuOpen, categories } = props

  const headerIconsProps = {
    isMenuOpen,
    handleToggle,
  }

  const navBarProps = {
    isMenuOpen,
    categories,
  }

  return(
    <DefaultLayout className={classes.container}>
      <SubHeader/>
      <div className={classes.headerItems}>
        <Logo/>
        <NavBar {...navBarProps}/>
        <HeaderIcons {...headerIconsProps}/>
      </div>
    </DefaultLayout>
  )
}

const classes = {
  container: `
    border-b-2
    border-black 
    py-3`,
  headerItems: `
    mt-2
    flex
    flex-row
    items-center
    justify-between`,
}

export default Header;