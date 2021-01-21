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
import FullNews from "./FullNews";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 345,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
    flexDirection: "column",
    justifyContent: "space-between",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    marginBottom: "5%",
    marginTop: "1%",
  },
  common: {
    marginBottom: "1%",
  },
}));
const HandleClick = (news) => {
  const navigate = useNavigate();
  navigate("./FullNews", { state: { id: news.id, news: news.news } });
};
const HomePage = (news, id) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <React.Fragment>
      {/* <Grid component={Card} className={classes.gridHeader} spacing={5}>
        <CardHeader title="News Of The Day" />
      </Grid> */}

      <Grid container spacing={1} key={news.id}>
        <Grid item xs={12} sm={6} md={4} lg={4} className={classes.grid}>
          <Paper className={classes.paper}>
            <Grid item component={Card}>
              <CardContent>
                <div style={{ textAlign: "justify" }}>
                  {" "}
                  <Typography variant="h6" gutterBottom>
                    {news.news.title}
                  </Typography>
                  <Typography variant="h7" gutterBottom>
                    {news.news.publishedAt}
                  </Typography>
                </div>
                <CardMedia
                  className={classes.media}
                  image={news.news.urlToImage}
                />
                <div
                  style={{ textAlign: "justify" }}
                  className={classes.common}
                >
                  <Typography variant="h7" gutterBottom>
                    {news.news.author}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {news.news.content}
                  </Typography>
                </div>
                {/* <Link to="/fullnews">LEARN MORE</Link> */}
                <Button
                  onClick={navigate("./FullNews", {
                    state: { id: news.id, news: news.news },
                  })}
                >
                  <Link to="/fullnews">LEARN MORE</Link>
                </Button>
              </CardContent>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default HomePage;
