import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";
import { useLocation } from "@reach/router";
// import React from 'react'

const FullNews = () => {
  // console.log(news);
  const { state } = useLocation();
  const { id, news } = state;
  console.log(news);
  return <div>Hello</div>;
};

export default FullNews;
