import React, { useState, useCallback } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input, Space, Alert } from "antd";
import ButtonPanel from "../../../sharedComponents/Button";

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");

  const changePassword = () => {
    if (oldPassword !== "" && newPassword !== "" && confirmNewPassword !== "") {
      const changePassowrdObj = {
        oldPassword: oldPassword,
        newPassword: newPassword,
        confirmNewPassword: confirmNewPassword,
      };
      if (newPassword === confirmNewPassword) {
        setMessage("Password changed successfully.");
        setShowAlert(true);
      } else {
        setMessage("Password does not match.");
        setShowAlert(true);
      }
      console.log("change Password:", changePassowrdObj);
    } else {
      alert("please enter change password details");
      setShowAlert(false);
    }

    setTimeout(() => {
      setShowAlert(false);
    }, 4000);
  };

  return (
    <>
      {showAlert && (
        <Alert
          style={{ marginTop: 10 }}
          message={message}
          type="success"
          showIcon
          onClose={() => setTimeout(() => {}, 1000)}
        />
      )}
      <h1>Change Password: </h1>
      <Space direction="vertical">
        <Input.Password
          placeholder="old password"
          size="large"
          name="oldPassword"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          onChange={(e) => setOldPassword(e.target.value)}
          style={{ width: 500 }}
        />
        <Input.Password
          size="large"
          placeholder="new password"
          name="newPassword"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          onChange={(e) => setNewPassword(e.target.value)}
          style={{ width: 500 }}
        />

        <Input.Password
          size="large"
          placeholder="confirm new password"
          name="confirmNewPassword"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          style={{ width: 500 }}
        />
      </Space>

      <div style={{ marginTop: "2rem" }}>
        <ButtonPanel
          type={"primary"}
          title={"Change Password"}
          onClick={changePassword}
        />
      </div>
    </>
  );
}