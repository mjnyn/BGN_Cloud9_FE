import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import Article from "./Article";
import InfiniteScroll from "react-infinite-scroll-component";

const Articles = ({ articlesList, setClicked }) => {
  const classes = useStyles();
  if (!articlesList.length) {
    return (
      <>
        <img
          src="/images/not-found.png"
          alt="not-found"
          className="not-found"
        />
        <Typography align="center">Nothing to show</Typography>
      </>
    );
  }
  return (
    <InfiniteScroll
      dataLength={articlesList.length}
      // next={this.fetchMoreData}
      // hasMore={this.state.hasMore}
      loader={<h4>Loading...</h4>}
      height={700}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <Box style={{ height: "100%" }} className={classes.box}>
        {articlesList.map((article, idx) => (
          <Article
            key={idx}
            article={article}
            idx={idx}
            setClicked={() => setClicked(articlesList[idx])}
          />
        ))}
      </Box>
    </InfiniteScroll>
  );
};

export default Articles;
