/* eslint-disable no-unused-vars */
import * as React from 'react'
import { props } from './types'

import { useDash } from './helpers/stream'

export const Video = (props: props) => {
  useDash({
    autoPlay: props.autoPlay,
    remoteUrl: props.remoteUrl,
    requestHeader: props.options?.requestHeader,
    requestToken: props.options?.requestToken,
    query: props.options?.query
  })

  return (
    <video
      id='video'
      loop
      className={props.className}
      controls={props.controls}
      style={props.style}
      contextMenu={props.contextMenu}
      controlsList={props.controlsList}
      autoPlay={props.autoPlay}
      preload='auto'
    />
  )
}
