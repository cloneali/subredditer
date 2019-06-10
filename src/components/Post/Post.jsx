import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Post extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    description: PropTypes.string,
    author: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    numberOfComments: PropTypes.number.isRequired,
    linkToComments: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
      src: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number
    })
  }
  static defaultProps = {
    description: '',
    thumbnail: null
  }

  _getFormatedDateFromUTC = (timeInUTC = Date.now / 1000) => {
    return new Date(timeInUTC * 1000).toLocaleString('en-US')
  }

  render() {
    return (
      <div data-test-id='post' className='ui fluid card'>
        <div className='content'>
          {this.props.thumbnail && (
            <img
              data-test-id='post-thumbnail'
              className='left floated ui image rounded bordered'
              src={this.props.thumbnail.src}
              alt=''
            />
          )}
          <div className='header'>
            <a
              data-test-id='post-title'
              rel='noopener noreferrer'
              target='_blank'
              href={this.props.link}
            >
              {this.props.title}
            </a>
          </div>
          <div className='meta'>
            <span data-test-id='post-submitted'>
              Submitted on {this._getFormatedDateFromUTC(this.props.time)}
            </span>
          </div>
          <div data-test-id='post-description' className='description'>
            <p>{this.props.description}</p>
          </div>
        </div>
        <div className='extra content'>
          <a
            data-test-id='post-commentLink'
            rel='noopener noreferrer'
            target='_blank'
            className='blue'
            href={this.props.linkToComments}
          >
            <i className='comment icon' />
            <span data-test-id='post-numberOfComments'>
              {this.props.numberOfComments} comments
            </span>
          </a>
          <div className='right floated author'>
            <i className='user icon' />
            <span data-test-id='post-author'>{this.props.author}</span>
          </div>
        </div>
      </div>
    )
  }
}
