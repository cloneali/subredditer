import React from 'react'
import { shallow } from 'enzyme'

import Search from 'components/Search'

describe('<Search />', () => {
  it('should renders correctly', () => {
    const wrapped = shallow(<Search fetchPost={() => {}} />)

    expect(wrapped.exists({ 'data-test-id': 'search' })).toEqual(true)

    expect(wrapped.find({ 'data-test-id': 'search-input' }).type()).toEqual(
      'input'
    )

    expect(wrapped.find({ 'data-test-id': 'search-submit' }).type()).toEqual(
      'button'
    )
  })

  it('should submit button call fetchPost()', () => {
    const mockCallBack = jest.fn()
    const wrapped = shallow(<Search fetchPost={mockCallBack} />)

    window.scrollTo = jest.fn()

    wrapped.find('form').simulate('submit', {
      preventDefault: () => {}
    })

    expect(mockCallBack).toHaveBeenCalled()
  })

  it('should capture search input correctly onChange', () => {
    const mockCallBack = jest.fn(subreddit => {})

    const wrapped = shallow(<Search fetchPost={mockCallBack} />)

    const searchInput = wrapped.find({ 'data-test-id': 'search-input' })

    searchInput.simulate('change', {
      target: {
        value: 'ottawa'
      }
    })

    wrapped.update()

    expect(
      wrapped.find({ 'data-test-id': 'search-input' }).prop('value')
    ).toEqual('ottawa')
  })
})
