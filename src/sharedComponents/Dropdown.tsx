import React from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Typography } from 'antd';

const items = [
    {
      key: '1',
      label: '1',
    },
    {
      key: '2',
      label: '2',
    },
    {
      key: '3',
      label: '25',
    },
  ];



const DropdownPanel = () => {

    const selectDropItemValue = (e:any) =>{
        console.info("working days", e.key)

    }

  return (
   <>
     <Dropdown
    menu={{
        onClick: selectDropItemValue,
        items:items,
      selectable: true,
      defaultSelectedKeys: ['1'],
    }}
  >
    <Typography.Link>
      <Space>
        Select No of Days
        <DownOutlined />
      </Space>
    </Typography.Link>
  </Dropdown>
   </>
  )
}



export default DropdownPanel;
