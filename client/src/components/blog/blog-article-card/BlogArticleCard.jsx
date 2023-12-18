import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Card, message } from "antd";
import { ShareAltOutlined, CommentOutlined } from "@ant-design/icons";

import DropdownCardMenu from "../dropdown-card-menu/DropdownCardMenu";
import EditArticle from "../../edit-article/EditArticle";
import useUserAuth from "../../../store/useUserAuth";

import styles from "./BlogArticleCard.module.css";

const { Meta } = Card;

export default function BlogArticleCard({
  title,
  description,
  imgUrl,
  _id,
  _ownerId,
  setArticles,
}) {
  const navigate = useNavigate();
  const { userData } = useUserAuth((state) => ({ userData: state.userData }));
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const onOkHandle = () => {
    setIsEditModalOpen(false);
  };

  const onCancelHandle = () => {
    setIsEditModalOpen(false);
  };

  const onShareIconClick = (e) => {
    e.stopPropagation();
    message.success("Link copied!");
  };
  const onCommentIconClick = (e) => {
    e.stopPropagation();
    navigate(`/blog/${_id}`);
  };

  const actions = [
    <CommentOutlined key="comment" onClick={onCommentIconClick} />,
    <ShareAltOutlined key="share" onClick={onShareIconClick} />,
  ];

  if (userData._id === _ownerId) {
    actions.push(
      <DropdownCardMenu
        articleId={_id}
        key="ellipsis"
        setArticles={setArticles}
        setIsEditModalOpen={setIsEditModalOpen}
      />
    );
  }
  return (
    <>
      <Card
        hoverable
        onClick={() => {
          navigate(`/blog/${_id}`);
        }}
        style={{
          width: 500,
        }}
        cover={<img className={styles.cardImg} alt={title} src={imgUrl} />}
        actions={actions}
      >
        <Meta
          className={styles.cardBody}
          avatar={
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
          }
          title={title}
          description={description}
        />
      </Card>

      <EditArticle
        isModalOpen={isEditModalOpen}
        onOkHandle={onOkHandle}
        onCancelHandle={onCancelHandle}
        setArticles={setArticles}
        articleId={_id}
      />
    </>
  );
}
