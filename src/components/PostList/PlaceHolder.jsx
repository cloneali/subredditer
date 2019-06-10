import React, { Component } from 'react'

export default class PlaceHolder extends Component {
  renderPlaceHolderCard = () => {
    return (
      <div data-test-id='PlaceHolder' className='ui fluid card'>
        <div className='content'>
          <div className='ui fluid placeholder'>
            <div className='header'>
              <div className='line' />
              <div className='line' />
            </div>
            <div className='paragraph'>
              <div className='line' />
              <div className='line' />
              <div className='line' />
            </div>
          </div>
        </div>
      </div>
    )
  }
  render() {
    return (
      <React.Fragment>
        {this.renderPlaceHolderCard()}
        {this.renderPlaceHolderCard()}
        {this.renderPlaceHolderCard()}
        {this.renderPlaceHolderCard()}
        {this.renderPlaceHolderCard()}
        {this.renderPlaceHolderCard()}
      </React.Fragment>
    )
  }
}
