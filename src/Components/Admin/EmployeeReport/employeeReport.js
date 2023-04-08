import { Input, Button, Table } from "antd";
import React, { useState } from "react";
import axios from "axios";

const columns = [
  {
    title: "EmpName",
    dataIndex: "EmpName",
  },
  {
    title: "EmpMail",
    dataIndex: "EmpMail",
  },
  {
    title: "EmpAddress",
    dataIndex: "EmpAddress",
  },
  {
    title: "Degree",
    dataIndex: "Degree",
  },
  {
    title: "City",
    dataIndex: "City",
  },
  {
    title: "Pincode",
    dataIndex: "Pincode",
  },
  {
    title: "Mobile",
    dataIndex: "Mobile",
  },
  {
    title: "ClassName",
    dataIndex: "ClassName",
  },
  {
    title: "BasicPay",
    dataIndex: "BasicPay",
  },
  {
    title: "Salary",
    dataIndex: "Salary",
  },
];

export default function EmployeeReport() {
  const [employeeId, setEmployeeId] = useState("");
  const [employeeData, setEmployeeData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setLoading(true);
    setError("");
    setEmployeeData(null);

    try {
      const response = await axios.get(`https://localhost:44332/api/Employee/${employeeId}`);
      setEmployeeData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setError("Error retrieving employee data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div style={{ backgroundColor: "black", padding: "1px" }}>
          <h3 style={{ color: "white" }}>Employee Reports</h3>
        </div>
      <div style={{ maxWidth: 600, margin: "auto" }}>
        <br/>
        <Input placeholder="Employee ID" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} />
        <br/>
        <br/>
        <Button type="primary" onClick={handleSearch} loading={loading}>
          Search
        </Button>
      </div>
      {error && <div>{error}</div>}
      {employeeData && <Table columns={columns} dataSource={[employeeData]} />}
    </>
  );
}
