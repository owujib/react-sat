import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div id="home">
      <Jumbotron>
        <h1>Welcome to my react app</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eum,
          maxime reiciendis aliquam accusantium libero harum laborum ea a ex
          incidunt sed doloribus magni ullam. Velit nihil saepe at dignissimos
          id a libero iste culpa distinctio ipsum cumque, molestiae est
          laudantium alias praesentium sapiente soluta?
        </p>
        <div>
          <Link className="btn-outline-info btn mr-3">Readmore </Link>
          <Link className="btn-outline-warning btn mr-3">About us </Link>
        </div>
      </Jumbotron>
    </div>
  );
}

export default Home;
