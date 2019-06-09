import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Search extends Component {
  static propTypes = {
    fetchPost: PropTypes.func.isRequired
  };

  state = { subreddit: "" };

  subredditInputChange = event => {
    this.setState({ subreddit: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.fetchPost(this.state.subreddit);
    this.setState({ subreddit: "" });
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="ui action input" data-test-id="search">
          <input
            onChange={this.subredditInputChange}
            type="text"
            placeholder="Subreddit..."
            value={this.state.subreddit}
            data-test-id="search-input"
          />
          <button
            type="submit"
            className="ui primary button"
            data-test-id="search-submit"
          >
            Search
          </button>
        </div>
      </form>
    );
  }
}
