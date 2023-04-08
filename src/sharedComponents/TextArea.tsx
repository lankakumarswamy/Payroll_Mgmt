import React from "react";
import { Input } from "antd";
const { TextArea } = Input;

const TextAreaPanel = (props: any) => {
  const { onChange } = props;

  return (
    <>
      <TextArea
        showCount
        title="Reason"
        maxLength={100}
        style={{
          height: 60,
          width: 500,
          marginBottom: 10,
        }}
        onChange={onChange}
        placeholder="Reason"
      />
    </>
  );
};

export default TextAreaPanel;
