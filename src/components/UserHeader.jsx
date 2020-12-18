import React, { Component } from "react";
import { connect } from "react-redux";

class PostHeader extends Component {
  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return <div key={this.props.userId}>{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find((user) => user.id === ownProps.userId),
  };
};

export default connect(mapStateToProps)(PostHeader);
