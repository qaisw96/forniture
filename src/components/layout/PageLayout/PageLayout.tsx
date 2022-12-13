import React, {useEffect, useState} from 'react';
import Header from "../../header/Header/Header";
import Footer from "../../Footer/Footer";
import {useRouter} from "next/router";

const PageLayout = ({ children, categories }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();

  const handleToggle = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    handleToggle();
  }, [router.asPath]);

  const headerProps = {
    handleToggle,
    isMenuOpen,
    categories,
  };

  return (
    <div>
      <Header {...headerProps}/>
      {children}
      <Footer categories={categories}/>
    </div>
  );
};

export default PageLayout;