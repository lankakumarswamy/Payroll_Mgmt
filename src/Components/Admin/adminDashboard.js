import { Layout, Menu, Button, Modal } from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FooterPanel from "../../sharedComponents/Footer";
import AddClass from "./AddClass/addClass";

export default function AdminDashboard() {
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
        Payroll Management System{" "}
      </Header>
      <Layout style={{ height: "100vh", paddingTop: "50px" }}>
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
              <Link to="addclass">Add Class</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="addEmployee">Add Employee</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="manageLeave">Leave</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="employeeReport">Employee Report</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="salary">Salary</Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="salaryReport">Salary Report</Link>
            </Menu.Item>
            
            <Menu.Item key="8">
              <Link to="createNewAdmin">Create New Admin</Link>
            </Menu.Item>
            <Menu.Item key="9">
              <Link to="resetPassword">Change Password</Link>
            </Menu.Item>
            <Menu.Item key="10">
              <Link to="logout" onClick={onLogout}>Logout</Link>
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
