import React from "react";
import { Button, Layout, Space } from "antd";
import { Link } from "react-router-dom";

const { Header, Footer, Content } = Layout;

const headerStyle = {
  textAlign: "center",
  fontWeight: "bold",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

const contentStyle = {
  textAlign: "center",
  minHeight: 600,
  lineHeight: "120px",
  display: "flex",
  justifyContent: "center",
};

const footerStyle = {
  textAlign: "center",
  fontWeight: "bold",
  backgroundColor: "#7dbcea",
};

export default function LoginPage() {
  return (
    <div>
      {" "}
      <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
        <Layout>
          <Header style={headerStyle}>Payroll Management System</Header>
          <Content style={contentStyle}>
            <Space wrap>
              <Link to="/login">
                <Button>Login as Admin</Button>
              </Link>
              <Link to="/login">
                <Button>Login as Employee</Button>
              </Link>
            </Space>
          </Content>
          <Footer style={footerStyle}>© Team 2</Footer>
        </Layout>
      </Space>
    </div>
  );
}
