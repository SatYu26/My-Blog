import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./pages/homepage.js";
import AboutPage from "./pages/aboutPage.js";
import ArticlesPage from "./pages/articlePage.js";
import ArticlesListPage from "./pages/articlesListPage.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/articles-list" component={ArticlesListPage} />
          <Route path="/article" component={ArticlesPage} />
        </div>
      </Router>
    );
  }
}

export default App;
