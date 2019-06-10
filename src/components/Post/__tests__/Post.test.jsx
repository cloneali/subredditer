import React from 'react'
import { shallow } from 'enzyme'
import Post from 'components/Post'

describe('<Post />', () => {
  it('render without thumbnail', () => {
    const wrapped = shallow(
      <Post
        title='Awesome Post Title'
        link='https://awesome.react.js/awesomePost'
        description='This is the description of awesome post'
        author='meauthor'
        time={1559786198}
        numberOfComments={12}
        linkToComments='https://awesome.react.js/awesomePost/comments'
      />
    )

    expect(wrapped.exists({ 'data-test-id': 'post' })).toEqual(true)

    expect(
      wrapped
        .find({ 'data-test-id': 'post-title' })
        .render()
        .text()
    ).toEqual('Awesome Post Title')
    expect(
      wrapped
        .find({ 'data-test-id': 'post-description' })
        .render()
        .text()
    ).toEqual('This is the description of awesome post')

    expect(
      wrapped
        .find({ 'data-test-id': 'post-author' })
        .render()
        .text()
    ).toEqual('meauthor')
    expect(
      wrapped
        .find({ 'data-test-id': 'post-submitted' })
        .render()
        .text()
    ).toEqual('Submitted on 6/5/2019, 9:56:38 PM')
    expect(
      wrapped.find({ 'data-test-id': 'post-commentLink' }).prop('href')
    ).toEqual('https://awesome.react.js/awesomePost/comments')

    expect(
      wrapped
        .find({ 'data-test-id': 'post-numberOfComments' })
        .render()
        .text()
    ).toEqual('12 comments')

    expect(wrapped.exists({ 'data-test-id': 'post-thumbnail' })).toEqual(false)
  })

  it('render with thumbnail', () => {
    const wrapped = shallow(
      <Post
        title='Awesome Post Title'
        link='https://awesome.react.js/awesomePost'
        description='This is the description of awesome post'
        author='meauthor'
        time={1559786198}
        numberOfComments={12}
        linkToComments='https://awesome.react.js/awesomePost/comments'
        thumbnail={{
          src: 'https://awesome.react.js/awesomePost/image.png',
          width: 104,
          height: 104
        }}
      />
    )

    expect(wrapped.exists({ 'data-test-id': 'post' })).toEqual(true)

    expect(
      wrapped
        .find({ 'data-test-id': 'post-title' })
        .render()
        .text()
    ).toEqual('Awesome Post Title')
    expect(
      wrapped
        .find({ 'data-test-id': 'post-description' })
        .render()
        .text()
    ).toEqual('This is the description of awesome post')

    expect(
      wrapped
        .find({ 'data-test-id': 'post-author' })
        .render()
        .text()
    ).toEqual('meauthor')
    expect(
      wrapped
        .find({ 'data-test-id': 'post-submitted' })
        .render()
        .text()
    ).toEqual('Submitted on 6/5/2019, 9:56:38 PM')
    expect(
      wrapped.find({ 'data-test-id': 'post-commentLink' }).prop('href')
    ).toEqual('https://awesome.react.js/awesomePost/comments')

    expect(
      wrapped
        .find({ 'data-test-id': 'post-numberOfComments' })
        .render()
        .text()
    ).toEqual('12 comments')

    expect(wrapped.exists({ 'data-test-id': 'post-thumbnail' })).toEqual(true)

    expect(
      wrapped.find({ 'data-test-id': 'post-thumbnail' }).prop('src')
    ).toEqual('https://awesome.react.js/awesomePost/image.png')
  })
})
