import React, { useState, useEffect } from "react";
import { Button, Form, Input, message, Table } from "antd";
import axios from "axios";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    number: "${label} is not a valid number!",
  },
};

export default function AddClass() {
  const [messageApi, contextHolder] = message.useMessage();

  const [form] = Form.useForm();
  const [formData, setFormData] = useState({});
  const [classData, setClassData] = useState([]);

  useEffect(() => {
    fetchClassData();
  }, []);

  const fetchClassData = async () => {
    try {
      const response = await axios.get("https://localhost:44332/api/Class");
      setClassData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onFinish = async (values) => {
    try {
      await submitForm(values);
      messageApi.success("Class added successfully!");
      form.resetFields();
      fetchClassData();
    } catch (error) {
      messageApi.error("Error adding Class.");
      console.error(error);
    }
  };

  const submitForm = async (values) => {
    try {
      const response = await axios.post(
        "https://localhost:44332/api/Class",
        values
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  
  const columns = [
    {
      title: "Class",
      dataIndex: "ClassName",
      key: "className",
    },
    {
      title: "Basic Pay",
      dataIndex: "BasicPay",
      key: "basicPay",
    },
    {
      title: "Salary",
      dataIndex: "Salary",
      key: "salary",
    },
    {
      title: "Travel Allowance",
      dataIndex: "TravelAllowance",
      key: "travelAllowance",
    },
    {
      title: "Shift Allowance",
      dataIndex: "ShiftAllowance",
      key: "shiftAllowance",
    },
    {
      title: "Medical Allowance",
      dataIndex: "MedicalAllowance",
      key: "medicalAllowance",
    },
    
  ];

  return (
    
    <div>
      <div style={{ backgroundColor: "black", padding: "0.5px" }}>
          <h3 style={{ color: "white" }}>Add New Class</h3>
        </div>
        <br/>
      {contextHolder}
      <Form
        layout={layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{ maxWidth: 600, margin: "auto" }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["className"]}
          label="Class Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["basicPay"]}
          label="Basic Pay"
          rules={[{ required: true, type: "text" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["travelAllowance"]}
          label="Travel Allowance"
          rules={[{ required: true, type: "text" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["shiftAllowance"]}
          label="Shift Allowance"
          rules={[{ required: true, type: "text" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["medicalAllowance"]}
          label="Medical Allowance"
          rules={[{ required: true, type: "text" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Add Class
          </Button>
        </Form.Item>
      </Form>
      <br />
      <Table dataSource={classData} columns={columns} />
    </div>
  )
}

