import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPost } from 'store/posts/actions'

import Post from 'components/Post'

export class PostList extends Component {
  static propTypes = {
    fetchPost: PropTypes.func.isRequired,
    posts: PropTypes.object
  }

  static defaultProps = {
    posts: { data: { children: [] } }
  }

  renderPostList = () => {
    return this.props.posts.data.children.map(post => {
      return (
        <Post
          key={post.data.name}
          title={post.data.title}
          link={post.data.url}
          description={post.data.selftext}
          author={post.data.author}
          numberOfComments={post.data.num_comments}
          linkToComments={`https://www.reddit.com${post.data.permalink}`}
          time={post.data.created_utc}
          thumbnail={
            post.data.thumbnail && post.data.thumbnail !== 'self'
              ? {
                  src: post.data.thumbnail,
                  width: post.data.thumbnail_width,
                  height: post.data.thumbnail_height
                }
              : undefined
          }
        />
      )
    })
  }
  render() {
    return this.renderPostList()
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      if (this.props.posts.status === 'SUCCESS') {
        this.props.fetchPost(this.props.posts.subreddit, 'refresh')
      }
    }, 60000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})

const mapDispatchToProps = {
  fetchPost
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList)
