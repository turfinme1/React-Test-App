import React, { useEffect, useState } from "react";
import { Button, Flex } from "antd";

import BlogArticleCard from "./blog-article-card/BlogArticleCard";
import BlogArticleSkeleton from "./blog-article-skeleton/BlogArticleSkeleton";
import CreateArticle from "../create-article/CreateArticle";
import useUserAuth from "../../store/useUserAuth";

import * as articleService from "../../services/articleService";

import styles from "./Blog.module.css";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
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
    setIsCreateModalOpen(true);
  };

  const onOkHandle = () => {
    setIsCreateModalOpen(false);
  };

  const onCancelHandle = () => {
    setIsCreateModalOpen(false);
  };

  return (
    <Flex align="center" vertical className={styles.blogWraper}>
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
          <BlogArticleCard
            key={article._id}
            {...article}
            setArticles={setArticles}
          />
        ))}
      </Flex>

      <CreateArticle
        isModalOpen={isCreateModalOpen}
        onOkHandle={onOkHandle}
        onCancelHandle={onCancelHandle}
        setArticles={setArticles}
      />

      {/* <EditArticle
        isModalOpen={isEditModalOpen}
        onOkHandle={onOkHandle}
        onCancelHandle={onCancelHandle}
        setArticles={setArticles}
      /> */}
    </Flex>
  );
}
