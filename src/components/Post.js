import React, { Component } from 'react';
import { Card } from './Test';

class Post extends Component {
  render() {
    console.log(this.props);
    let { elements } = this.props;

    const postList = elements.map((item) => {
      return <Card key={item.id} {...item} />;
    });
    return <div className="info">{postList}</div>;
  }
}

export default Post;
