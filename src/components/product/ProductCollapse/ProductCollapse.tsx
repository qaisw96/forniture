import React from 'react';
import {Collapse} from "antd";
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';

const { Panel } = Collapse;

const ProductCollapse = () => {
  const onChange = () => {};

  return (
    <Collapse className={classes.container} defaultActiveKey={['1']} onChange={onChange} expandIconPosition="end" expandIcon={({ isActive }) => isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}>
      <Panel header="Description" key="1">
        <p>Description text</p>
      </Panel>
      <Panel header="Additional information" key="2">
        <p>Additional information text</p>
      </Panel>
    </Collapse>
  );
};

const classes = {
  container: `
    mt-20
    rounded-none`,
}

export default ProductCollapse;