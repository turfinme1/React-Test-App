import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Flex } from "antd";

import * as articleService from "../../services/articleService";

import useUserAuth from "../../store/useUserAuth";
import AddCommentForm from "./add-comment-form/AddCommentForm";
import styles from "./Article.module.css";

export default function Article() {
  const { articleId } = useParams();
  const [article, setArticle] = useState({});
  const { isAuthenticated, userData } = useUserAuth((state) => ({
    isAuthenticated: state.isAuthenticated,
    userData: state.userData,
  }));

  useEffect(() => {
    articleService
      .getOne(articleId)
      .then((result) => setArticle(result))
      .catch((err) => console.log(err));
  }, []);
  // da si oparavq layout-a i da dobavq user info na posta (created by:user)
  // delete edit ako si owner
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
          {isAuthenticated && <AddCommentForm username={userData.username}/>}
        </Flex>
        <Flex className={styles.comments}>
          <span>Comments:</span>
          <p>{article.articleText}</p>
          <p>{article.articleText}</p>
          <p>{article.articleText}</p>
          <p>{article.articleText}</p>
        </Flex>
      </Flex>
    </Flex>
  );
}