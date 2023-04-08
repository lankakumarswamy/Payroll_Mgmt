import React, { useState } from "react";
import { Button, Form, Input, Select, message, DatePicker } from "antd";
import axios from "axios";

const { TextArea } = Input;

const layout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 16 },
};
const validateMessages = {
  required: "${label} is required!",
  types: { number:"${label} is not a valid number!",},
};

  export default function Salary() {
  const [EmployeeId, setEmployeeId] = useState("");
  const [SalaryDate, setSalaryDate] = useState("");
  const [MailId, setMailId] = useState("");
  const [TravelAllowances, setTravelAllowances] = useState("");
  const [MedicalAllowances, setMedicalAllowances] = useState("");
  const [ShiftAllowances, setShiftAllowances] = useState("");

  const [BasicSalary, setBasicAmount] = useState("");
  

  const handleSubmit = () => {
    const SalaryObject = {
      EmployeeId: EmployeeId,
      SalaryDate: SalaryDate && SalaryDate.format("YYYY-MM-DD"),
      MailId: MailId,
      
      BasicSalary: BasicSalary,
      TravelAllowances:TravelAllowances,
      MedicalAllowances:MedicalAllowances,
      ShiftAllowances:ShiftAllowances,

      
    };
    axios
      .post("https://localhost:44332/api/Salary", SalaryObject)
      .then((res) => {
        message.success("Salary Generated Successfully");
      })
      .catch((error) => {
        message.error("Error while generating salary");
      });
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={handleSubmit}
            style={{ maxWidth: 600, margin: "auto" }}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["EmployeeId"]}
              label="EmployeeId"
              rules={[{ required: true }]}
            >
              <Input onChange={(e) => setEmployeeId(e.target.value)} />
            </Form.Item>
            <Form.Item
              name={["SalaryDate"]}
              label="SalaryDate"
              rules={[{ required: true }]}
            >
              <DatePicker
                onChange={(date) => setSalaryDate(date)}
                format="YYYY-MM-DD"
              />
            </Form.Item>
            <Form.Item
              name={["MailId"]}
              label="MailId"
              rules={[{ required: true }]}
            >
              <Input onChange={(e) => setMailId(e.target.value)} />
            </Form.Item>
            <Form.Item
              name={["BasicSalary"]}
              label="BasicSalary"
              rules={[{ required: true }]}
            >
              <Input onChange={(e) => setBasicAmount(e.target.value)} />
            </Form.Item>
            <Form.Item
              name={["TravelAllowances"]}
              label="TravelAllowances"
              rules={[{ required: true }]}
            >
              <Input onChange={(e) => setTravelAllowances(e.target.value)} />
            </Form.Item>
            <Form.Item
              name={["MedicalAllowances"]}
              label="MedicalAllowances"
              rules={[{ required: true }]}
            >
              <Input onChange={(e) => setMedicalAllowances(e.target.value)} />
            </Form.Item>
            <Form.Item
              name={["ShiftAllowances"]}
              label="ShiftAllowances"
              rules={[{ required: true }]}
            >
              <Input onChange={(e) => setShiftAllowances(e.target.value)} />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Generate Salary
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
