import React from 'react';

import './App.css';
import Test, { Card } from './components/Test';

// const App = () => {};

function App() {
  const post = [
    {
      id: 1,
      title: 'first title',
      link: 'https://ng.oberlo.com/blog/best-time-post-social-media',
      img:
        'https://images.unsplash.com/photo-1531564701487-f238224b7ce3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, libero?',
    },
    {
      id: 2,
      title: 'second title',
      link: 'https://ng.oberlo.com/blog/best-time-post-social-media',
      img:
        'https://images.unsplash.com/photo-1531564701487-f238224b7ce3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, libero?',
    },
    {
      id: 3,
      title: 'third title',
      link:
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.sproutsocial.com%2Fuploads%2F2020%2F03%2FBTP-2020-Facebook-Heatmap-Global.png&imgrefurl=https%3A%2F%2Fsproutsocial.com%2Finsights%2Fbest-times-to-post-on-social-media%2F&tbnid=jHXoEdnJpLYYGM&vet=12ahUKEwijsfzE9eHvAhUR4RoKHe7LDTMQMygcegUIARCNAg..i&docid=VctX4cq7_tQ3RM&w=1560&h=1092&q=post%20images&ved=2ahUKEwijsfzE9eHvAhUR4RoKHe7LDTMQMygcegUIARCNAg',
      img:
        'https://media.sproutsocial.com/uploads/2020/03/BTP-2020-Facebook-Heatmap-Global.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, libero?',
    },
  ];

  let postList = post.map(function (item) {
    return <Card elements={item} />;
  });

  return (
    <div className="app">
      <Test />

      <div className="info">{postList}</div>
    </div>
  );
}

export default App;
