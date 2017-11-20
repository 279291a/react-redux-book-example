import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Jumbotron, Button } from 'react-bootstrap';

export default function Home() {
  return (
    <div>
      <Helmet title="主页" />
      <Jumbotron>
        <div className="container">
          <h1>学习redux</h1>
          <p>学习使用React与Redux搭建Universal应用</p>
          <p><Button bsStyle="primary">了解更多</Button></p>
        </div>
      </Jumbotron>

      <div className="container">主页啦啦啦啦</div>
    </div>
  );
}
