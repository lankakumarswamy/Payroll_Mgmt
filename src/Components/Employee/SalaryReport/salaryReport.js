import React, { useState } from "react";
import { Input, Space } from "antd";
import ButtonPanel from "../../../sharedComponents/Button";

export default function SalaryReport() {
  const [name, setName] = useState("");
  const [basicPay, setBasicPay] = useState("");
  const [salary, setSalary] = useState("");
  const [deduction, setDeduction] = useState("");
  const [allowance, setAllowance] = useState("");
  const [netPay, setNetPay] = useState("");
  const [showReceipt, setShowReceipt] = useState(false);

  const calculateNetPay = () => {
    const result = parseInt(basicPay) + parseInt(salary) - parseInt(deduction) + parseInt(allowance);
    setNetPay(result);
  };

  const handleViewReceipt = () => {
    setShowReceipt(true);
  };

  const submitSalaryReport = () => {
    const salaryReportObj = {
      name: name,
      basicPay: basicPay,
      salary: salary,
      deduction: deduction,
      allowance: allowance,
      netPay: netPay,
    };
    console.log("salaryReportObject: ", salaryReportObj);
  };

  return (
    <div className="salary-report-container">
      <h1>Salary Report</h1>
      <Space direction="vertical">
        <Input
          placeholder="Enter Name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          style={{ width: 300 }}
        />

        <Input
          placeholder="Basic Pay"
          name="basicpay"
          value={basicPay}
          onChange={(e) => setBasicPay(parseInt(e.target.value))}
          style={{ width: 300 }}
        />

        <Input
          placeholder="Enter Salary"
          name="salary"
          value={salary}
          onChange={(e) => setSalary(parseInt(e.target.value))}
          style={{ width: 300 }}
        />

        <Input
          placeholder="Enter Deduction"
          name="deduction"
          value={deduction}
          onChange={(e) => setDeduction(parseInt(e.target.value))}
          style={{ width: 300 }}
        />

        <Input
          placeholder="Enter Allowance"
          name="allowance"
          value={allowance}
          onChange={(e) => setAllowance(parseInt(e.target.value))}
          style={{ width: 300 }}
        />

        <Input
          placeholder="Enter Netpay"
          name="netpay"
          value={netPay}
          readOnly
          style={{ width: 300 }}
        />
      </Space>

      <div style={{ marginTop: "2rem" }}>
        <ButtonPanel title={"Submit"} onClick={submitSalaryReport} />
      </div>

      <button className="btn-calculate" onClick={calculateNetPay}>
        Calculate Net Pay
      </button>

      <div className="form-group">
        <label htmlFor="net-pay">Net Pay:</label>
        <input
          type="number"
          id="net-pay"
          value={netPay}
          readOnly
        />
      </div>

      <button className="btn-view-receipt" onClick={handleViewReceipt}>
        View Receipt
      </button>

      {showReceipt && (
        <div className="receipt">
          <h2>Receipt</h2>
          <p>Basic Pay: {basicPay}</p>
          <p>Salary: {salary}</p>
          <p>Deduction: {deduction}</p>
          <p>Allowance: {allowance}</p>
          <p>Net Pay: {netPay}</p>
        </div>
      )}
    </div>
  );
      };  
