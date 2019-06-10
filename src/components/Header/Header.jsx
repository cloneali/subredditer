import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Search from 'components/Search'
import Paginator from 'components/Paginator'
import { fetchPost } from 'store/posts/actions'

class Header extends Component {
  static propTypes = {
    subreddit: PropTypes.string,
    before: PropTypes.string,
    after: PropTypes.string
  }

  static defaultProps = {
    subreddit: null,
    before: null,
    after: null
  }

  render() {
    let { subreddit, before, after, fetchPost } = this.props
    return (
      <div className='ui top fixed stackable menu'>
        <div className='ui container'>
          <div className='ui container'>
            <h2 className='ui header'>
              Subredditer
              <div className='sub header'>
                {subreddit ? subreddit : 'Front Page'}
              </div>
            </h2>
          </div>
          <Paginator
            before={before}
            after={after}
            fetchPost={fetchPost}
            subreddit={subreddit}
          />
          <div className='right item'>
            <Search fetchPost={fetchPost} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  subreddit: state.posts.subreddit,
  before: state.posts.data.before,
  after: state.posts.data.after
})

const mapDispatchToProps = {
  fetchPost
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
