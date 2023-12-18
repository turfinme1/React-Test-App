import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Flex } from "antd";

import * as articleService from "../../services/articleService";

import styles from "./Home.module.css";

export default function Home(props) {
  const [article, setArticle] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      articleService
        .getLatestSingle()
        .then((result) => {
          setArticle(result);
          console.log(result);
        })
        .catch((err) => console.log(err));
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const onClickHandler = () => {
    navigate(`/blog/${article[0]._id}`);
  };

  return (
    <div className={styles.homeWrapper}>
      {article.map((article) => (
        <Flex key={article._id} className={styles.frontPageArticleArea}>
          <article className={styles.mainArticle}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <p>by {article.owner.username}</p>
            <Button onClick={onClickHandler}>Read more</Button>
          </article>
        </Flex>
      ))}
    </div>
  );
}
