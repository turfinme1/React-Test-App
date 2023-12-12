import { Button, Flex, Form, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";


import styles from "./Login.module.css";
import useUserAuth from "../../store/useUserAuth";

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

export default function Login() {
  const { login } = useUserAuth((state) => ({ login: state.login }));
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("Success:", values);
    // const result = authService
    //   .login(values)
    //   .then((result) => console.log(result))
    //   .catch(() => onFinishFailed("user doesnt exist"));

    const result = await login(values);

    // form.resetFields();
    // ako si na register i sled tova na login shte te vurne na register vupreki che si lognat?
    navigate("/");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Flex className={styles.loginContainer}>
      <Flex className={styles.loginForm}>
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
            <Input placeholder="Enter your email" />
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
            <Input.Password placeholder="Enter your password" />
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
              style={{ background: "#44bd32", color: "#f1f2f6" }}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Flex>
    </Flex>
  );
}
