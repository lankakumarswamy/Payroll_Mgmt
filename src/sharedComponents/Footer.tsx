import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { Content, Footer } from "antd/es/layout/layout";

function FooterPanel() {
  return (
    <>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "hidden",
            height: `calc(100vh - 24px - 64px)`, // subtracting header and footer heights
          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: "center",
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            position: "fixed",
            bottom: 0,
            width: "100%",
          }}
        >
          © Team 2
        </Footer>
      </Layout>
    </>
  );
}

export default FooterPanel;
