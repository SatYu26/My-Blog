import React from "react";
import { Link } from "react-router-dom";

import articleContent from "./article-content";

const ArticlesListPage = () => {
  return (
    <React.Fragment>
      <h1>Articles</h1>
      {articleContent.map((article, key) => {
        return (
          <Link
            to={`/article/${article.name}`}
            className="article-list-item"
            key={key}
          >
            <h3>{article.title}</h3>
            <p>{article.content[0].substring(0, 150)}...</p>
          </Link>
        );
      })}
    </React.Fragment>
  );
};

export default ArticlesListPage;