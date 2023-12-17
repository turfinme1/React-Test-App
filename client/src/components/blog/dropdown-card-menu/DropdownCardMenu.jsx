import React, { useState } from "react";
import { EllipsisOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import * as articleService from "../../../services/articleService";

export default function DropdownCardMenu({
  articleId,
  setArticles,
  setIsEditModalOpen,
}) {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (nextOpen, info) => {
    if (info.source === "trigger" || nextOpen) {
      setOpen(nextOpen);
    }
  };

  const onDeleteClick = async (e) => {
    e.stopPropagation();
    try {
      await articleService.remove(articleId);
      setArticles((state) => state.filter((x) => x._id !== articleId));
    } catch (error) {
      console.log(error);
    }
    setOpen(false);
  };

  const onEditClick = (e) => {
    e.stopPropagation();
    setIsEditModalOpen(true);
    setOpen(false);
  };

  const items = [
    {
      label: <div onClick={onDeleteClick}>Delete article</div>,
      key: "0",
    },
    {
      label: <div onClick={onEditClick}>Edit article</div>,
      key: "1",
    },
  ];

  return (
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
      placement="topCenter"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <a
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <Space>
          <EllipsisOutlined />
        </Space>
      </a>
    </Dropdown>
  );
}
