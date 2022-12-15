import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import {useRouter} from "next/router";

interface INavItem {
    name: string;
    slug: string
}

const NavItem = (props: INavItem) => {
    const { name, slug } = props;
    const router = useRouter()
    const navigateTo = () => router.push({pathname: '/product-category/[id]', query: {id: slug}})

    return (
      <div className={classes.container} onClick={navigateTo}>
          <h3 className={classes.title}>{ name }</h3>
      </div>
    );
}

const classes = {
  container: `
    transform
    transition-all
    duration-200
    hover:bg-secondary 
    hover:scale-110
    flex 
    justify-between 
    md:justify-start 
    py-4
    md:py-2
    px-4 
    cursor-pointer`,
  title: `
    text-sm`,

}
export default NavItem;