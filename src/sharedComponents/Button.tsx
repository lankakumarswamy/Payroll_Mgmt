import React from "react";
import { Button, Space } from "antd";

const ButtonPanel = (props: any) => {
  const { type, title, onClick } = props;
  return (
    <Space wrap>
      <Button type={type} onClick={onClick}>
        {title}
      </Button>
    </Space>
  );
};

export default ButtonPanel;
