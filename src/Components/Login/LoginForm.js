import React, { useState } from "react";
import axios from "axios";
import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import { Link, useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErrMsg, setPasswordErrMsg] = useState("");
  const [userNameErrMsg, setUserNameErrMsg] = useState("");

  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

   const loginUser = async () => {
    axios
      .post("https://localhost:44376/api/Login", {
       EmailId: JSON.stringify(username),
       LoginPassword: JSON.stringify(password),
        Users: JSON.stringify("Employee"),
      })
       .then((response) => {
        console.log("response", response.message);
      })
      .catch((error) => console.log(error.message));
  };

  const login = (e) => {
    e.preventDefault();
    if (username == "" || username == undefined) {
      setUserNameErrMsg("please enter username");
    } else if (password === "" || password === undefined) {
      setPasswordErrMsg("please enter password");
    } else {
      setPasswordErrMsg("");
      setUserNameErrMsg("");
      navigate("/employee");
    }
    const loginObj = {
      EmailId: username,
       LoginPassword: password,
       Users: "Employee",
     };
     loginUser();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            name="username"
            onChange={(e) => {
              setUserName(e.target.value);
              setUserNameErrMsg("");
            }}
          />
          <span style={{ color: "red" }}>{userNameErrMsg}</span>
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => {
              setPasswordErrMsg("");
              setPassword(e.target.value);
            }}
          />
          <span style={{ color: "red" }}>{passwordErrMsg}</span>
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a>Forgot password</a>
        </Form.Item>

        <Form.Item>
          {/* <Link to="/employee"> */}
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ width: "100%" }}
            onClick={login}
          >
            Log in
          </Button>
          {/* </Link> */}

          
        <a>Register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
}

