import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

import jsonPlaceholder from "../apis/jsonPlaceholder";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    fetchPosts();
  }

  render() {
    return <div>Posts List</div>;
  }
}

export default connect(null, { fetchPosts })(PostList);
