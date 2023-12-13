import React, { useEffect, useState } from "react";
import { Button, Flex } from "antd";

import * as articleService from "../../services/articleService";
import BlogArticleCard from "./blog-article-card/BlogArticleCard";
import styles from "./Blog.module.css";
import BlogArticleSkeleton from "./blog-article-skeleton/BlogArticleSkeleton";
import useUserAuth from "../../store/useUserAuth";
import CreateArticle from "../create-article/CreateArticle";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isAuthenticated } = useUserAuth((state) => ({
    isAuthenticated: state.isAuthenticated,
  }));

  useEffect(() => {
    articleService.getLatest().then((result) => {
      setArticles(result);
      setIsLoading(false);
    });
  }, []);

  const onClickHandle = () => {
    setIsModalOpen(true);
  };

  const onOkHandle = () => {
    setIsModalOpen(false);
  };

  const onCancelHandle = () => {
    setIsModalOpen(false);
  };

  return (
    <Flex align="center" vertical>
      <Flex
        className={styles.articleOptions}
        align="center"
        justify="space-between"
      >
        <h2 className={styles.articleHeading}>Latest Articles</h2>
        {isAuthenticated && (
          <Button
            type="primary"
            style={{ background: "#44bd32", color: "#f1f2f6", fontWeight: 600 }}
            onClick={onClickHandle}
          >
            Create Article
          </Button>
        )}
      </Flex>
      <Flex className={styles.articleList} justify="center" align="center">
        {isLoading && <BlogArticleSkeleton cardsToRender={9} />}
        {articles.map((article) => (
          <BlogArticleCard key={article._id} {...article} />
        ))}
      </Flex>

      <CreateArticle
        isModalOpen={isModalOpen}
        onOkHandle={onOkHandle}
        onCancelHandle={onCancelHandle}
        setArticles = {setArticles}
      />
    </Flex>
  );
}
