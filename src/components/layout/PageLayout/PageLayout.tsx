import React, {useState} from 'react';
import Header from "../../header/Header/Header";
import Footer from "../../Footer/Footer";

const PageLayout = ({ children, categories }: any) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleToggle = () => setIsMenuOpen(!isMenuOpen)

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