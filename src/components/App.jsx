import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import PostList from "components/PostList";
import Header from "components/Header";
import { PlaceHolder } from "components/PostList";

import { fetchPost } from "store/posts/actions";

class App extends Component {
  static propTypes = {
    status: PropTypes.string,
    fetchPost: PropTypes.func
  };

  renderError() {
    return (
      <div className="ui bottom attached error message">
        <i className="exclamation circle icon" />
        Opps something went wrong!
      </div>
    );
  }
  render() {
    let { status } = this.props;
    return (
      <React.Fragment>
        <Header />
        <div
          className="ui container"
          style={{ marginTop: 80, marginBottom: 80 }}
        >
          {(status === "INIT" || status === "PENDING") && <PlaceHolder />}
          {status === "ERROR" && this.renderError()}
          {(status === "SUCCESS" || status === "REFRESHING") && <PostList />}
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.props.fetchPost();
  }
}

const mapStateToProps = state => ({
  status: state.posts.status
});

const mapDispatchToProps = {
  fetchPost
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
