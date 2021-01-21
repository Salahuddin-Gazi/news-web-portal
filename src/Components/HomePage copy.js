import React from "react";
import {
  CardHeader,
  Grid,
  makeStyles,
  Paper,
  Card,
  CardActions,
  Button,
  CardContent,
  Typography,
  CardMedia,
} from "@material-ui/core";
// import News from "./News";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
// import FullNews from "./FullNews";
import { useNavigate } from "@reach/router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    display: "flex",
    flexDirection: "row",
    // Justify the content so that CardContent will always be at the top of the card,
    // and CardActions will be at the bottom
    justifyContent: "space-between",
  },
  paper: {
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(1.5),
    textAlign: "left",
    color: theme.palette.text.secondary,
    backgroundColor: "#C1B19B",
  },
  gridHeader: {
    // padding: theme.spacing(1.5),
    textAlign: "center",
    margin: "auto",
  },
  item: {
    // backgroundColor: "#8BE7B9",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

const HomePage = (news, id) => {
  const classes = useStyles();
  // const news = articles;
  // console.log(articles.articles[19]);
  // console.log("news");
  return (
    <React.Fragment>
      <Grid component={Card} className={classes.gridHeader} spacing={5}>
        <CardHeader title="News Of The Day" />
      </Grid>
      {articles.articles.map((news, id) => {
        // console.log(id);
        return (
          <Grid container spacing={1} key={id}>
            <Grid item xs={12} sm={6} md={4} lg={4} className={classes.grid}>
              <Paper className={classes.paper}>
                <Grid item component={Card}>
                  <CardContent>
                    <div style={{ textAlign: "justify" }}>
                      {" "}
                      <Typography variant="h6" gutterBottom>
                        {news.title}
                      </Typography>
                      <Typography variant="h7" gutterBottom>
                        {news.publishedAt}
                      </Typography>
                    </div>
                    <CardMedia
                      className={classes.media}
                      image={news.urlToImage}
                    />
                    <div
                      style={{ textAlign: "justify" }}
                      className={classes.common}
                    >
                      <Typography variant="h7" gutterBottom>
                        {news.author}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {news.description}
                      </Typography>
                    </div>
                    <Link to="/fullnews">LEARN MORE</Link>
                  </CardContent>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        );
      })}
    </React.Fragment>
  );
};

export default HomePage;
