import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button, Modal } from "antd";

export default function LeaveDetails() {
  const [leaveData, setLeaveData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLeaveId, setSelectedLeaveId] = useState("");

  const handleAccept = async (leaveId) => {
    try {
      await axios.put(`https://localhost:44332/api/Leave/${leaveId}/approve`);
      fetchLeaveData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleReject = (leaveId) => {
    setSelectedLeaveId(leaveId);
    setModalVisible(true);
  };

  const handleRejectConfirm = async () => {
    try {
      await axios.put(`https://localhost:44332/api/Leave/${selectedLeaveId}/reject`);
      setModalVisible(false);
      fetchLeaveData();
    } catch (error) {
      console.error(error);
    }
  };

  const fetchLeaveData = async () => {
    try {
      const response = await axios.get(`https://localhost:44332/api/Leave`);
      setLeaveData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchLeaveData();
  }, []);

  const columns = [
    {
      title: "LeaveId",
      dataIndex: "LeaveId",
    },
    {
      title: "EmployeeId",
      dataIndex: "EmployeeId",
    },
    {
      title: "StartDate",
      dataIndex: "StartDate",
    },
    {
      title: "EndDate",
      dataIndex: "EndDate",
    },
    {
      title: "Reason",
      dataIndex: "Reason",
    },
    {
      title: "Description",
      dataIndex: "Description",
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (status) => {
        if (status === "Approved") {
          return <span style={{ color: "green" }}>{status}</span>;
        } else if (status === "Rejected") {
          return <span style={{ color: "red" }}>{status}</span>;
        } else {
          return <span>{status}</span>;
        }
      },
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => {
        if (record.Status === "Pending") {
          return (
            <>
              <Button type="primary" onClick={() => handleAccept(record.LeaveId)}>
                Accept
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={() => handleReject(record.LeaveId)}>
                Reject
              </Button>
            </>
          );
        } else {
          return <span>{record.Status}</span>;
        }
      },
    },
  ];

  return (
    <>
      <Modal
        visible={modalVisible}
        title="Reject Leave"
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setModalVisible(false)}>
            Cancel
          </Button>,
          <Button key="reject" type="primary" danger onClick={handleRejectConfirm}>
            Reject
          </Button>,
        ]}
      >
        <p>Are you sure you want to reject this leave?</p>
      </Modal>
      <Table columns={columns} dataSource={leaveData} />
    </>
  );
}
