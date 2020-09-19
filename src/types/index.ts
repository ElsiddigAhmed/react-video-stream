export interface props {
  className?: string
  controls?: boolean
  style?: object
  contextMenu?: string
  controlsList?: string
  autoPlay?: boolean
  options?: dash
  remoteUrl: string
}

export interface dash {
  requestHeader?: 'Authorization' | 'none' | string
  requestToken?: string
  query?: string
  autoPlay?: boolean
  remoteUrl?: string
}
