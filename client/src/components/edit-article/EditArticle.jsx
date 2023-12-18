import styles from "./EditArticle.module.css";
import { Button, Modal, Form, Input } from "antd";
import * as articleService from "../../services/articleService";
import { useEffect, useState } from "react";

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

export default function EditArticle({
  isModalOpen,
  onOkHandle,
  onCancelHandle,
  setArticles,
  articleId,
}) {
  const [form] = Form.useForm();
  const [initialValues, setInitialValues] = useState({});

  useEffect(() => {
    articleService
      .getOne(articleId)
      .then((result) => setInitialValues(result))
      .catch((err) => console.log(err));
  }, []);

  const onFinish = async (values) => {
    console.log("Success:", values);
    const result = await articleService.edit(articleId, values);
    
    setArticles((state) =>
      state.reduce((acc, curr) => {
        if (curr._id == result._id) {
            return [...acc,result]
        }
        else{
            return [...acc,curr]
        }
      }, [])
    );
    console.log(result);

    onOkHandle();
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal
      open={isModalOpen}
      title="Edit Article"
      onOk={onOkHandle}
      onCancel={onCancelHandle}
      footer={(_, { CancelBtn }) => (
        <>
          <Button
            type="danger"
            htmlType="submit"
            onClick={form.submit}
            style={{ background: "#44bd32", color: "#f1f2f6", fontWeight: 600 }}
          >
            Edit
          </Button>
          <CancelBtn />
        </>
      )}
    >
      <Form
        form={form}
        name="createArticleForm"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        {...formItemLayout}
        style={{
          maxWidth: 600,
        }}
        initialValues={initialValues}
      >
        <Form.Item
          hasFeedback
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: "Your article needs a title",
            },
            {
              whitespace: true,
              message: "Title cannot be empty!",
            },
            {
              min: 10,
              message: "Title must be at least 10 characters",
            },
          ]}
        >
          <Input placeholder="Tips for healthy eating" />
        </Form.Item>

        <Form.Item
          hasFeedback
          name="description"
          label="Description"
          rules={[
            {
              required: true,
              message: "Your article needs a description",
            },
            {
              whitespace: true,
              message: "Description cannot be empty!",
            },
            {
              min: 20,
              message: "Description must be at least 20 characters",
            },
          ]}
        >
          <Input.TextArea placeholder="Discover a path to wellness with our expert tips for..." />
        </Form.Item>

        <Form.Item
          hasFeedback
          name="articleText"
          label="Content"
          rules={[
            {
              required: true,
              message: "Your article needs content",
            },
            {
              whitespace: true,
              message: "Content cannot be empty!",
            },
            {
              min: 50,
              message: "Content must be at least 50 characters",
            },
          ]}
        >
          <Input.TextArea placeholder="From incorporating vibrant fruits and vegetables..." />
        </Form.Item>

        <Form.Item
          hasFeedback
          name="imgUrl"
          label="Image URL"
          rules={[
            {
              required: true,
              message: "Please select an image for your article!",
            },
            {
              type: "url",
              message: "Please select a valid URL!",
            },
          ]}
        >
          <Input placeholder="Select a picture" />
        </Form.Item>

        {/* <Form.Item
          wrapperCol={{
            offset: 6,
            span: 16,
          }}
        >
          <Button
            block
            type="danger"
            htmlType="submit"
            style={{ background: "#44bd32", color: "#f1f2f6", fontWeight: 600 }}
          >
            Create
          </Button>
        </Form.Item> */}
      </Form>
    </Modal>
  );
}
