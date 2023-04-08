import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import axios from "axios";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    number: "${label} is not a valid number!",
  },
};
/* eslint-enable no-template-curly-in-string */

export default function NewAdmin() {
  const [messageApi, contextHolder] = message.useMessage();

  const [form] = Form.useForm();
  const [formData, setFormData] = useState({});

  const onFinish = async (values) => {
    try {
      await submitForm(values);
      console.log(values);
      messageApi.success("Admin added successfully!");
      form.resetFields();
    } catch (error) {
      messageApi.error("Error adding admin.");
      console.error(error);
    }
  };

  const submitForm = async (values) => {
    try {
      const response = await axios.post("https://localhost:44332/api/Admin", values);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <div>
      <div>
        <div style={{ backgroundColor: "black", padding: "1px" }}>
          <h3 style={{ color: "white" }}>Create New Admin</h3>
        </div>
        <div style={{ marginTop: "20px" }}>
          <Form
            form={form}
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            style={{ maxWidth: 600, margin: "auto" }}
            validateMessages={validateMessages}
          >
            
            <Form.Item
              name={["AdminName"]}
              label="AdminName"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["EmailId"]}
              label="EmailId"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["AdminPassword"]}
              label="AdminPassword"
              rules={[{ required: true }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name={["CoadminPassword"]}
              label="CoadminPassword"
              dependencies={["password"]}
              rules={[
                { required: true },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("AdminPassword") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The two passwords do not match.")
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              {contextHolder}
              <Button type="primary" htmlType="submit">
                Make Admin
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
