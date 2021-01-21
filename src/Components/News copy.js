import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useNavigate } from "@reach/router";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FullNews from "./FullNews";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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

// const News = (author, content, description, publishedAt, title, urlToImage) => {
const News = (news) => {
  // const data = { news };
  // <FullNews {...data} />;
  //   const author = news.author;
  //   console.log(news.urlToImage);

  // const handleClick = () => {
  //   // <FullNews {...data} />;
  //   // console.log(data);
  //   return (
  // //     <React.Fragment>
  // //       <Link to="/fullnews">LEARN MORE</Link>
  // //     </React.Fragment>
  // //   );

  //   // console.log(news);
  // };

  const classes = useStyles();
  //   const [expanded, setExpanded] = React.useState(false);

  return (
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
          // image={news.urlToImage}
        />
        <div style={{ textAlign: "justify" }} className={classes.common}>
          {/* <Typography variant="h5" gutterBottom>
            {news.publishedAt}
          </Typography> */}
          <Typography variant="h7" gutterBottom>
            {news.author}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {news.description}
          </Typography>
          {/* <Typography variant="body2" component="p">
              {news.content}
            </Typography> */}
        </div>
        {/* <FullNews {...data} /> */}
        {/* <Button size="small" color="primary" onClick={handleClick}>
          Learn More
        </Button> */}
        {/* <Link to="/fullnews">LEARN MORE</Link> */}
        {/* <Link to="/fullnews">LEARN MORE</Link> */}
        {/* const navigate = useNavigate();
        navigate("/fullnews", { state: { news: news, index: index } }); */}

const navigate = useNavigate();
  navigate("/fullnews", { state: { news: news, index: index } });


      </CardContent>
    </Grid>
  );
};

export default News;
