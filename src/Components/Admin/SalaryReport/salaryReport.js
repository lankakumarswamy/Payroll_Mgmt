import { Input, Button, Table } from "antd";
import React, { useState } from "react";
import axios from "axios";

const columns = [
  {
    title: "Employee ID",
    dataIndex: "EmployeeId",
  },
  {
    title: "Salary Date",
    dataIndex: "SalaryDate",
  },
  {
    title: "Email ID",
    dataIndex: "MailId",
  },
  {
    title: "Basic Salary",
    dataIndex: "BasicSalary",
  },
  {
    title: "Travel Allowances",
    dataIndex: "TravelAllowances",
  },
  {
    title: "Medical Allowances",
    dataIndex: "MedicalAllowances",
  },
  {
    title: "Shift Allowances",
    dataIndex: "ShiftAllowances",
  },
  {
    title: "Total Amount",
    dataIndex: "TotalAmount",
  },

];

export default function EmployeeReport() {
  const [salaryid, setsalaryid] = useState("");
  const [salaryData, setSalaryData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setLoading(true);
    setError("");
    setSalaryData(null);

    try {
      const response = await axios.get(`https://localhost:44332/api/Salary/${salaryid}`);
      setSalaryData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setError("Error retrieving salary data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div style={{ backgroundColor: "black", padding: "1px" }}>
        <h3 style={{ color: "white" }}>Salary Reports</h3>
      </div>
      <div style={{ maxWidth: 600, margin: "auto" }}>
        <br />
        <Input placeholder="Salary ID" value={salaryid} onChange={(e) => setsalaryid(e.target.value)} />
        <br />
        <br />
        <Button type="primary" onClick={handleSearch} loading={loading}>
          Search
        </Button>
      </div>
      {error && <div>{error}</div>}
      {salaryData && <Table columns={columns} dataSource={[salaryData]} />}
    </>
  );
}
