import React, { useEffect, useState } from "react";
import { Flex } from "antd";

import * as articleService from "../../services/articleService";
import BlogArticleCard from "./blog-article-card/BlogArticleCard";
import styles from "./Blog.module.css";
import BlogArticleSkeleton from "./blog-article-skeleton/BlogArticleSkeleton";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    articleService.getAll().then((result) => {
      setArticles(result);
      setIsLoading(false);
    });
  }, []);

  return (
    <Flex align="center" vertical>
      <h2 className={styles.articleTitle}>Latest Articles</h2>
      <Flex className={styles.articleList} justify="center" align="center">
        {isLoading && <BlogArticleSkeleton cardsToRender={9} />}
        {articles.map((article) => (
          <BlogArticleCard key={article._id} {...article} />
        ))}
      </Flex>
    </Flex>
  );
}
