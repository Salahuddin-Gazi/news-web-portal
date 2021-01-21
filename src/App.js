// import "./App.css";
import React, { Component } from "react";
import HomePage from "./Components/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FullNews from "./Components/FullNews";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      // author: [],
      selectedNews: null,
    };
  }
  componentDidMount() {
    fetch(
      "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b2a6834190c449ed8627c2722238309a"
    )
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        // console.log(myJson);
        this.setState({
          articles: myJson.articles,
        });
      });
  }

  render() {
    // console.log(this.state.articles);
    return (
      <React.Fragment>
        <Router>
          <Route path="/" exact>
            <div>News Of The Day</div>
            {this.state.articles.map((news, id) => {
              return <HomePage news={news} id={id} />;
            })}
          </Route>
          <Route path="/fullnews">
            <FullNews data={selectedNews} />
          </Route>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;
