import { Button, Flex, Form, Input } from "antd";

import * as commentService from "../../../services/commentService";

import styles from "./AddCommentForm.module.css";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 24,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 24,
    },
  },
};

export default function AddCommentForm({
  username,
  userImgUrl,
  articleId,
  setComments,
}) {
  const [form] = Form.useForm();

  const onFinish = async ({ commentText }) => {
    console.log("Success:", commentText);
    const comment = await commentService.create({
      articleId,
      username,
      commentText,
    });
    setComments((state) => [...state, { ...comment, owner: { userImgUrl } }]);
    form.resetFields();
    console.log(comment);
  };

  const onFinishFailed = (errorInfo) => {};

  return (
    <Flex className={styles.formContainer}>
      <span>Comment as: {username} </span>
      <Form
        form={form}
        className={styles.form}
        name="createArticleForm"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        {...formItemLayout}
        style={{}}
      >
        <Form.Item
          name="commentText"
          rules={[
            {
              required: true,
              message: "You need to write something!",
            },
            {
              whitespace: true,
              message: "Comment cannot be empty!",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 6,
            span: 12,
          }}
        >
          <Button
            block
            type="danger"
            htmlType="submit"
            style={{ background: "#44bd32", color: "#f1f2f6", fontWeight: 600 }}
          >
            Add Comment
          </Button>
        </Form.Item>
      </Form>
    </Flex>
  );
}
