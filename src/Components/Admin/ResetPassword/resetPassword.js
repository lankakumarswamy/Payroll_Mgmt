import React from "react";
import { Button, Form, Input, message } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    number: "${label} is not a valid number!",
  },
};
/* eslint-enable no-template-curly-in-string */

export default function NewAdmin() {
  const [messageApi, contextHolder] = message.useMessage();

  const [form] = Form.useForm();

  const submitForm = ({ name = '', favoriteColor = '' }) => {
    console.log(name, favoriteColor);
    form.resetFields();
  };

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Password Reset successfully!",
      duration: 3,
    });
  };
  
  return (
    React.createElement("div", null,
      React.createElement("div", null,
        React.createElement("div", { style: { backgroundColor: "black", padding: "1px" } },
          React.createElement("h3", { style: { color: "white" } }, "Change Password")
        ),
        React.createElement("div", {
            style: {
              marginTop: "40px",
              border: "1px solid black",
              padding: "20px",
            }
          },
          React.createElement(Form, {
              form: form,
              layout: layout,
              name: "nest-messages",
              onFinish: submitForm,
              style: { maxWidth: 600, margin: "auto" },
              validateMessages: validateMessages
            },
            React.createElement(Form.Item, {
              name: ["old password"],
              label: "Old Password",
              rules: [{ required: true }]
            }, React.createElement(Input, null)),
            React.createElement(Form.Item, {
                name: "password",
                label: "Password",
                rules: [{
                  required: true,
                  message: "Please input your password!",
                }],
                hasFeedback: true
              },
              React.createElement(Input.Password, null)
            ),
            React.createElement(Form.Item, {
                name: "confirm",
                label: "Confirm Password",
                dependencies: ["password"],
                hasFeedback: true,
                rules: [{
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("Confirm passwords not match!")
                      );
                    },
                  }),
                ]
              },
              React.createElement(Input.Password, null)
            ),
            React.createElement(Form.Item, {
                wrapperCol: { ...layout.wrapperCol, offset: 8 }
              },
              contextHolder,
              React.createElement(Button, {
                  type: "primary",
                  htmlType: "submit",
                  onClick: success
                },
                "Submit"
              )
            )
          )
        )
      )
    )
  );
}
