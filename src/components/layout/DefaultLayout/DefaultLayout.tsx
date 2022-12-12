import React from 'react';

const DefaultLayout = ({ children, className }: any) => {
    return (
        <div className={`${className} px-4 md:px-20`}>
            {children}
        </div>
    );
};

export default DefaultLayout;