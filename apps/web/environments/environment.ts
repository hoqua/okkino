import * as process from 'node:process'

export const webEnv: IWebEnv = {
  isProd: process.env.OKKINO_ENV === 'production',
  api: {
    gqlUrl: process.env.OKKINO_WEB_GQL_URL
  },
  storage: {
    url: process.env.OKKINO_WEB_STORAGE_URL,
    endpoint: process.env.OKKINO_WEB_STORAGE_ENDPOINT
  }
}

export interface IWebEnv {
  isProd: boolean
  api: {
    gqlUrl: string
  }
  storage: {
    url: string
    endpoint: string
  }
}
