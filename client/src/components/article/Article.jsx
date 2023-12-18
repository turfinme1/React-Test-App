import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Flex } from "antd";

import AddCommentForm from "./add-comment-form/AddCommentForm";

import * as articleService from "../../services/articleService";
import * as commentService from "../../services/commentService";
import useUserAuth from "../../store/useUserAuth";

import styles from "./Article.module.css";

export default function Article() {
  const { articleId } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const { isAuthenticated, userData } = useUserAuth((state) => ({
    isAuthenticated: state.isAuthenticated,
    userData: state.userData,
  }));

  useEffect(() => {
    articleService
      .getOne(articleId)
      .then((result) => setArticle(result))
      .catch((err) => console.log(err));

    commentService
      .getAll(articleId)
      .then((result) => setComments(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Flex className={styles.container} justify="center">
      <Flex component="article" className={styles.article}>
        <Flex className={styles.articleHeading}>
          <h1>{article.title}</h1>
          <img src={article.imgUrl} alt={article.title} />
        </Flex>
        <Flex className={styles.articleContent}>
          <p>{article.articleText}</p>
        </Flex>
        <Flex className={styles.addCommentForm}>
          {isAuthenticated && (
            <AddCommentForm
              username={userData.username}
              userImgUrl={userData.userImgUrl}
              articleId={articleId}
              setComments={setComments}
            />
          )}
        </Flex>
        <Flex className={styles.commentSection}>
          <span>Comments:</span>
          {comments.map((comment) => (
            <Flex key={comment._id} className={styles.comments}>
              <Flex className={styles.commentOwner}>
                <img src={comment.owner.userImgUrl} alt={comment.username} />
              </Flex>
              <Flex className={styles.commentText}>
                <span className={styles.username}>{comment.username} </span>
                <p>{comment.commentText}</p>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
