import React from 'react';
import {
  Link
} from "react-router-dom";

class PostPreview extends React.Component {
  render = () => {
    console.log(this.props);
    return (
      <article>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <Link to={`/blog/${this.props.index}`}>Details</Link>
      </article>
    );
  };
}

export default PostPreview;
