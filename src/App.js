import React from 'react';
import { Link, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; //loading from node_modules

import './App.css';
import Test, { Card } from './components/Test';
import Students from './components/Students';
import Home from './components/Home';
import Post from './components/Post';
import Form from './components/Form';

class App extends React.Component {
  state = {
    post: [
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
    ],

    students: [
      { id: 1, name: 'John Doe', email: 'john@email', course: 'Java' },
      { id: 2, name: 'Mike Doe', email: 'mike@email', course: 'JavaScript' },
      {
        id: 3,
        name: 'Sarah Smith',
        email: 'sarah@email',
        course: 'Accounting',
      },
      { id: 4, name: 'Brad Jean', email: 'brad@email', course: 'Python' },
    ],
  };

  addStudent = (incomingState) => {
    let newId = this.state.students.length + 1;
    let newStudent = { id: newId, ...incomingState }; //create a copy my student object
    this.setState({
      students: [...this.state.students, newStudent],
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="app">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/post">Post</Link>
          </li>
          <li>
            <Link to="/students">Students</Link>
          </li>
        </ul>

        <Route path="/" exact component={Home} />

        {/* passing props to a route */}
        <Route
          path="/post"
          render={(routerProps) => (
            <Post {...routerProps} elements={this.state.post} />
          )}
        />
        <Route
          path="/students"
          render={(routerProps) => (
            <Students {...routerProps} elements={this.state.students} />
          )}
        />

        <Form addStudent={this.addStudent} />
      </div>
    );
  }
}

export default App;
