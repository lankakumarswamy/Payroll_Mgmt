import { Input, Button, Form, message } from "antd";
import React, { useState } from "react";
import axios from "axios";

const layout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    number: "${label} is not a valid number!",
  },
};

export default function AddEmployee() {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({});

  const onFinish = async (values) => {
    try {
      await submitForm({...values, ...formData});
      messageApi.success("Employee added successfully!");
      form.resetFields();
    } catch (error) {
      messageApi.error("Error adding Employee.");
      console.error(error);
    }
  };
  

  const onValuesChange = (changedValues, allValues) => {
    setFormData(allValues); // update formData whenever the form values change
  };

  const submitForm = async (formData) => {
    try {
      const response = await axios.post("https://localhost:44332/api/Employee", formData);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  

  return (
    <>
    <div style={{ backgroundColor: "black", padding: "0.5px" }}>
          <h3 style={{ color: "white" }}>Add New Employee</h3>
        </div>
        <br/>
      <div className="form-data">
        <div>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            style={{ maxWidth: 600, margin: "auto" }}
            validateMessages={validateMessages}
            onValuesChange={onValuesChange} // add onValuesChange prop
          >
            <Form.Item
              name="EmpName"
              label="EmpName"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="EmpMail"
              label="EmpMail"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="EmpAddress"
              label="EmpAddress"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="Degree"
              label="Degree"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="City"
              label="City"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="Pincode"
              label="Pincode"
              rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="Mobile"
              label="Mobile"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{
              ...layout.wrapperCol, offset
                : 8
            }}
            ></Form.Item>
          </Form>
        </div>
        <div>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            style={{ maxWidth: 600, margin: "auto" }}
            validateMessages={validateMessages}
            
          >
            <Form.Item
              name={["ClassName"]}
              label="ClassName"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["BasicPay"]}
              label="BasicPay"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["Salary"]}
              label="Salary"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name={["EmpPassword"]} label="EmpPassword">
              <Input />
            </Form.Item>
            <Form.Item name={["CoEmpPassword"]} label="CoEmpPassword">
              <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              {contextHolder}
              <Button type="primary" htmlType="submit">
                Add Employee
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}