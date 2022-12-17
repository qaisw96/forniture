import React from 'react';
import {Breadcrumb} from "antd";
import Link from "next/link";

const BreadCrumb = ({ words }: any) => {
  const renderItem = (word: any) => (
    <Breadcrumb.Item key={word} className={classes.item}>
      {word.text}
    </Breadcrumb.Item>
  )

  const renderItemLink = (word: any) => (
    <Breadcrumb.Item key={word}>
      <Link href={word.link} className={classes.item}>{word.text}</Link>
    </Breadcrumb.Item>
  )

  return (
    <Breadcrumb>
      {words.map((word: any) => {
        return word.link ? renderItemLink(word): renderItem(word)
      })}
    </Breadcrumb>
  );
};

const classes = {
  item: `
    capitalize`,
}

export default BreadCrumb;