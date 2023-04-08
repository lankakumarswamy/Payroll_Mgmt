import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
  Alert,
} from "antd";
import axios from "axios";
import ButtonPanel from "../../../sharedComponents/Button";
import "./applyLeave.css";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const leaveTypeslist = [
  { value: "Privilege Leave", label: "Privilege Leave" },
  { value: "Maternity Leave", label: "Maternity Leave" },
  { value: "Miscarriage Leave", label: "Miscarriage Leave" },
  { value: "Adoption Leave", label: "Adoption Leave" },
  { value: "Compoff Leave", label: "Compoff Leave" },
  { value: "Relocation Leave", label: "Relocation Leave" },
];

const reasonTypeList = [
  { value: "Sick", label: "Sick" },
  { value: "Vacation", label: "Vacation" },
  { value: "Personal", label: "Personal" },
  { value: "OutOff Station", label: "OutOff" },
  { value: "Festival", label: "Festival" },
  { value: "Others", label: "Others" },
];

const ApplyLeave = () => {
  const [EmployeeId, setEmpName] = useState();
  const [leaveType, setLeaveType] = useState();
  const [dateRange, setDateRange] = useState([]);
  const [reasonType, setReasonType] = useState();
  const [description, setDescription] = useState();
  const [alertMessage, setAlertMessage] = useState();

  const handleDateChange = (dateRange) => {
    setDateRange(dateRange);
  };

  //apply Leave Method
  const handleSubmit = () => {
    const applyLeaveObject = {
      EmployeeId: EmployeeId,
      StartDate: dateRange.length > 0 && dateRange[0].format("YYYY-MM-DD"),
      EndDate: dateRange.length > 0 && dateRange[1].format("YYYY-MM-DD"),
      Reason: reasonType,
      Description: description,
    };
    axios
      .post("https://localhost:44332/api/Leave", applyLeaveObject)
      .then((response) => {
        setAlertMessage("Leave applied successfully.");
        setTimeout(() => {
          setAlertMessage("");
        }, 4000);
        console.log("applyLeaveObject", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      number: "${label} is not a valid number!",
    },
  };

  return (
    <>
      {alertMessage && (
        <Alert
          style={{ marginTop: 10 }}
          message={alertMessage}
          type="success"
          showIcon
          onClose={() => setTimeout(() => { }, 1000)}
        />
      )}
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 14 }}
        layout="vertical"
        style={{ maxWidth: 500, height: "auto", paddingBottom: 10 }}
        validateMessages={validateMessages}
      >
        <Form.Item label="Employee id" rules={[{ required: true }]}>
          <Input
            name="EmployeeId"
            id="EmployeeId"
            onChange={(e) => {
              setEmpName(e.target.value);
            }}
          />
        </Form.Item>

        

        <Form.Item label="Select From Todates">
          <RangePicker
            name="datePicker"
            id="datePicker"
            onChange={handleDateChange}
            format="YYYY-MM-DD"
            value={dateRange}
          />
        </Form.Item>

        <Form.Item label="Reason Type">
          <Select
            onChange={(e) => {
              setReasonType(e);
            }}
          >
            {reasonTypeList.map((reason, i) => {
              return (
                <Select.Option value={reason.value} key={i}>
                  {reason.value}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item label="Description">
          <TextArea
            name="Description"
            id="Description"
            rows={5}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </Form.Item>



        <Form.Item>
          <ButtonPanel
            type={"primary"}
            title={"Apply Leave"}
            onClick={handleSubmit}
          />
        </Form.Item>
      </Form>
    </>
  );
};

export default ApplyLeave;