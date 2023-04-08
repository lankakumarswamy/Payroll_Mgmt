import React, { useState } from 'react';
import './LeaveReport.css'; // Import the CSS file

const LeaveReport = () => {
  // Define state for storing leave data
  const [leaveData] = useState([
    {
      employeeName: 'John Doe',
      leaveType: 'Sick Leave',
      startDate: '2023-03-25',
      endDate: '2023-03-28',
      reasonType: 'Medical',
      status: 'Approved'
    },
    {
      employeeName: 'Jane Smith',
      leaveType: 'Vacation',
      startDate: '2023-04-01',
      endDate: '2023-04-05',
      reasonType: 'Personal',
      status: 'Pending'
    }
  ]);

  return (
    <div className="leave-report-container">
      <h1>Leave Report</h1>
      <table className="leave-report-table">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Leave Type</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Reason Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {leaveData.map((leave, index) => (
            <tr key={index}>
              <td>{leave.employeeName}</td>
              <td>{leave.leaveType}</td>
              <td>{leave.startDate}</td>
              <td>{leave.endDate}</td>
              <td>{leave.reasonType}</td>
              <td>{leave.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveReport;