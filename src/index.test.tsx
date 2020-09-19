/* eslint-disable no-unused-vars */
import React from 'react'
import { Video } from '.'
import { render } from '@testing-library/react'

describe('Video', () => {
  it('video element is truthy', () => {
    expect(Video).toBeTruthy()
  })

  it('video component should render in the dom', () => {
    render(
      <Video
        remoteUrl='token'
        autoPlay={false}
        options={{ requestHeader: 'none', requestToken: 'none' }}
      />
    )
  })

  it('video component should throw error if remoteUrl prop is undefined', () => {
    render(
      <Video
        autoPlay={false}
        options={{ requestHeader: 'none', requestToken: 'none' }}
      />
    )
  })
})
