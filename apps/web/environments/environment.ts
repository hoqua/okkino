import * as process from 'node:process'

export const webEnv: IWebEnv = {
  isProd: process.env.OKKINO_ENV === 'production',
  api: {
    gqlUrl: process.env.OKKINO_WEB_GQL_URL
  }
}

export interface IWebEnv {
  isProd: boolean
  api: {
    gqlUrl: string
  }
}
