import React from "react";
import { Select } from "antd";

const SelectPanel = (props: any) => {
  const { items, handleChange, defaultValue } = props;

  return (
    <>
      <Select
        defaultValue={defaultValue}
        onChange={handleChange}
        options={items}
        showSearch
        style={{ width: 200 }}
        placeholder="Search to Select Days"
      />
    </>
  );
};

export default SelectPanel;
