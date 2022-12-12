import React from 'react';
import Link from "next/link";

const Logo = () => {
  return (
    <Link href='/' className={classes.logo}>
      FORNITURE STORE
    </Link>
  );
};

const classes = {
  logo: `
    text-primary`,
}

export default Logo;