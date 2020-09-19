# react-video-stream

> A React Library For Video And Audio Streaming With Custom Http Headers

[![NPM](https://img.shields.io/npm/v/react-video-stream.svg)](https://www.npmjs.com/package/react-video-stream) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## About

One of the most painful things is video streaming, and the painful part of video streaming is authenticated and protected video or audio. I worked on a system that requires authenticated videos on video playlist for authenticated students, so I have made this library as a small API inside of my react application, then I separated it into library, now you can call just one video class from the library and pass the options as shown bellow.

## Install

```bash
npm install --save react-video-stream
```

## Usage

```tsx
import React from 'react'
import { Video } from 'react-video-stream'
const url = 'http://example.com/manifest.mpd'

const options = {
  requestHeader: 'Authorization',
  requestToken: 'access_token'
}
const App = () => {
  return (
    <div>
      <Video
        className='video-class'
        controls={true}
        autoPlay={true}
        options={options}
        remoteUrl={url}
      />
    </div>
  )
}

export default App
```

## License

MIT © [AlsiddigAhmed](https://github.com/AlsiddigAhmed)
