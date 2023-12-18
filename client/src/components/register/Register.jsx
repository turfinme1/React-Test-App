import { useNavigate } from "react-router-dom";
import { Button, Flex, Form, Input, Select } from "antd";

import useUserAuth from "../../store/useUserAuth";

import styles from "./Register.module.css";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

export default function Register() {
  const { register } = useUserAuth((state) => ({ register: state.register }));
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      await register(values);
      form.resetFields();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Flex className={styles.registerContainer}>
      <Flex className={styles.registerForm}>
        <Form
          form={form}
          name="registerForm"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          {...formItemLayout}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item
            hasFeedback
            name="username"
            label="Username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
              {
                whitespace: true,
                message: "Username cannot be empty!",
              },
              {
                min: 3,
                message: "Username must be at least 3 characters",
              },
            ]}
          >
            <Input placeholder="Create your username" />
          </Form.Item>

          <Form.Item
            hasFeedback
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              {
                whitespace: true,
                message: "Password cannot be empty!",
              },
              {
                min: 3,
                message: "Password must be at least 3 characters",
              },
            ]}
          >
            <Input.Password placeholder="Create your password" />
          </Form.Item>

          <Form.Item
            hasFeedback
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
              {
                type: "email",
                message: "Please select a valid email",
              },
            ]}
          >
            <Input placeholder="Select your email" />
          </Form.Item>

          <Form.Item
            hasFeedback
            name="userImgUrl"
            label="User Picture"
            rules={[{ type: "url", message: "Please select a valid url" }]}
          >
            <Input placeholder="Select your picture" />
          </Form.Item>

          <Form.Item name="gender" label="Gender">
            <Select placeholder="Select your gender" allowClear>
              <Select.Option value="Male">Male</Select.Option>
              <Select.Option value="Female">Female</Select.Option>
              <Select.Option value="Other">Other</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 6,
              span: 16,
            }}
          >
            <Button
              block
              type="danger"
              htmlType="submit"
              style={{ background: "#bd4235", color: "#f1f2f6" }}
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </Flex>
    </Flex>
  );
}
