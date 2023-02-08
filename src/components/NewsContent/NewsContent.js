import { Container } from "@mui/system";
import React from "react";
import "./NewsContent.css";
import NewsCard from "../NewsCard/NewsCard";
const NewsContent = ({ newsArray, newsResults }) => {
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="downloadMessage">
          <span className="downloadText">
            For the best experience use inshorts app on your smartphone
          </span>
          <img
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
            alt="ios-download"
            height="80%"
          />
          <img
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
            alt="android-download"
            height="80%"
          />
        </div>

        {
          newsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))
        }
      </div>
    </Container>
  );
};

export default NewsContent;
