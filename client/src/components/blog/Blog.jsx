import React, { useEffect, useState } from "react";
import { Flex } from "antd";

import * as articleService from "../../services/articleService";
import BlogArticleCard from "./blog-article-card/BlogArticleCard";
import styles from "./Blog.module.css";

export default function Blog() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    articleService.getAll().then((result) => setArticles(result));
    console.log(articleService.getAll());
    console.log('use effect');
  }, []);

  return (
    <Flex align="center" vertical>
      <h2 className={styles.articleTitle}>Latest Articles</h2>
      <Flex className={styles.articleList} justify="center" align="center">
        {articles.map((article) => (
          <BlogArticleCard key={article._id} {...article} />
        ))}      
      </Flex>
    </Flex>
  );
}
