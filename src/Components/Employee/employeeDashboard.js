import React, { useState } from "react";
import { Layout, Menu, Modal } from "antd";

import { Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

import { Link, useNavigate } from "react-router-dom";
import FooterPanel from "../../sharedComponents/Footer";

export default function EmployeeDashboard() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(
    "Are you sure you want to logout?"
  );

  const toggleShow = () => setShow((p) => !p);

  const onLogout = () => {
    toggleShow();
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setShow(false);
      setConfirmLoading(false);
      navigate("/");
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setShow(false);
  };

  return (
    <div>
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          color: "#FFFFFF",
        }}
      >
        {" "}
        Employee Payroll Management System{" "}
      </Header>
      <Layout style={{ height: "150vh", paddingTop: "50px" }}>
        <Sider
          style={{
            overflow: "auto",
            height: "calc(100vh - 64px)",
            position: "fixed",
            left: 0,
            top: 64,
          }}
        >
          <Menu theme="dark" mode="inline">
            <Menu.Item key="1">
              <Link to="applyLeave">Apply Leave</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="printSalarySlip">Print Salary Slip</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="salaryReport">Salary Report</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="changePassword">Change Password</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="logout" onClick={onLogout}>
                Logout
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>

        <FooterPanel />
      </Layout>

      <>
        <Modal
          title="Payroll Management System"
          open={show}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          okText={"Logout"}
          onCancel={handleCancel}
        >
          <p>{modalText}</p>
        </Modal>
      </>
    </div>
  );
}
