import React from 'react';
import {Breadcrumb} from "antd";

const BreadCrumb = ({ words }: any) => {
  return (
    <Breadcrumb>
      {words.map((word: any) => (
        <Breadcrumb.Item>{word}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default BreadCrumb;