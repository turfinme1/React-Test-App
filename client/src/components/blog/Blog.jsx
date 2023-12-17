import React, { useEffect, useState } from "react";
import { Button, Flex } from "antd";

import * as articleService from "../../services/articleService";
import BlogArticleCard from "./blog-article-card/BlogArticleCard";
import styles from "./Blog.module.css";
import BlogArticleSkeleton from "./blog-article-skeleton/BlogArticleSkeleton";
import useUserAuth from "../../store/useUserAuth";
import CreateArticle from "../create-article/CreateArticle";
import EditArticle from "../edit-article/EditArticle";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
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
    setIsEditModalOpen(false);
  };

  const onCancelHandle = () => {
    setIsCreateModalOpen(false);
    setIsEditModalOpen(false);
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
          <BlogArticleCard
            key={article._id}
            {...article}
            setIsEditModalOpen={setIsEditModalOpen}
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
