import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Paginator extends Component {
  static propTypes = {
    before: PropTypes.string,
    after: PropTypes.string,
    subreddit: PropTypes.string,
    fetchPost: PropTypes.func.isRequired
  }

  static defaultProps = {
    before: null,
    after: null,
    subreddit: ''
  }

  goPrevious = event => {
    this.props.fetchPost(this.props.subreddit, 'previous')
    window.scrollTo(0, 0)
  }

  goNext = event => {
    this.props.fetchPost(this.props.subreddit, 'next')
    window.scrollTo(0, 0)
  }
  render() {
    let { before, after } = this.props
    return (
      <React.Fragment>
        <div className='right item'>
          <button
            data-test-id='paginator-previous'
            onClick={this.goPrevious}
            className='ui labeled icon button'
            disabled={!before}
          >
            <i className='left arrow icon' />
            Previous
          </button>
        </div>
        <div className='right item'>
          <button
            data-test-id='paginator-next'
            onClick={this.goNext}
            className='ui right labeled icon button'
            disabled={!after}
          >
            <i className='right arrow icon' />
            Next
          </button>
        </div>
      </React.Fragment>
    )
  }
}
