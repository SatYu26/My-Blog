import React from "react";

import articleContent from "./article-content";
import ArticlesList from "../components/ArticlesList";

const ArticlesListPage = () => {
  return (
    <React.Fragment>
      <h1>Articles</h1>
      <ArticlesList articles={articleContent} />
    </React.Fragment>
  );
};

export default ArticlesListPage;
