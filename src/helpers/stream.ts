/* eslint-disable no-unused-vars */
import Dash from 'dashjs'
import { dash } from '../types'

export const useDash = (props: dash) => {
  const player = Dash.MediaPlayer().create()
  document.addEventListener('DOMContentLoaded', () => {
    const videoElement: any = document.querySelector('#video')
    player.extend(
      'RequestModifier',
      function () {
        return {
          modifyRequestHeader: function (xhr: XMLHttpRequest) {
            xhr.setRequestHeader(
              `${props.requestHeader}`,
              `${props.requestToken}`
            )

            return xhr
          },
          modifyRequestURL: function (url: string) {
            return `${url}?${props.query}`
          }
        }
      },
      true
    )
    player.initialize(videoElement, props.remoteUrl, props.autoPlay)
  })
}
