import React from "react";

export default function PrintSalarySlip() {
  return (
    <div className="salary-slip">
      <table className="empDetail">
        <tbody>
          <tr>
            <th>Name</th>
            <td>Meera</td>
            <td />
            <th>Bank</th>
            <td>ABC123</td>
            <td />
            <th>Class</th>
            <td>Class1</td>
          </tr>
          <tr>
            <th>BasicPay</th>
            <td>XXXXXXXXXXX</td>
            <td />
            <th>Salary</th>
            <td>XXXXXXXXXXX</td>
            <td />
            <th>Month</th>
            <td>January</td>
          </tr>
          <tr>
            <th>Year</th>
            <td>2019</td>
            <td />
            <th>Allowance</th>
            <td>1000</td>
            <td />
            <th>Deduction</th>
            <td>300</td>
          </tr>
          <tr>
            <th>Travel</th>
            <td>10000</td>
            <td />
            <th>Medical</th>
            <td>3000</td>
            <td />
            <th>Washing</th>
            <td>800</td>
          </tr>
          <tr>
            <th>HR</th>
            <td>250</td>
            <td />
            <th>DA</th>
            <td>100</td>
            <td />
            <th>Leave</th>
            <td>0</td>
          </tr>
          <tr className="myBackground">
            <th colSpan={2}>Payments</th>
            <th>Particular</th>
            <th className="table-border-right">Amount (Rs.)</th>
            <th colSpan={2}>Deductions</th>
            <th>Particular</th>
            <th>Amount (Rs.)</th>
          </tr>
          <tr>
            <th colSpan={2}>BasicPay</th>
            <td />
            <td className="myAlign">5000</td>
            <th colSpan={2}>Salary</th>
            <td />
            <td className="myAlign">40,000</td>
          </tr>
          <tr className="myBackground">
            <th colSpan={3}>Total Payments</th>
            <td className="myAlign">10000</td>
            <th colSpan={3}>Total Deductions</th>
            <td className="myAlign">1000</td>
            <th colSpan={3}>Total Allowance</th>
            <td className="myAlign">500</td>
          </tr>
          <tr style={{ height: 40 }}>
            <td className="table-border-right" />
            <th colSpan={2} className="table-border-bottom">
              Net Salary
            </th>
            <td />
            <td>46,650</td>
          </tr>
        </tbody>
        <tbody className="border-center">
          <tr>
            <td colSpan={4} />
            <td>Print Salary Slip</td>
            <td>1500</td>
            <td />
            <td />
          </tr>
        </tbody>
      </table>
    </div>
  );
}
