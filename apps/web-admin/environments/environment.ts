import * as process from 'node:process'

export const webAdminEnv: IWebEnv = {
  isProd: process.env.OKKINO_ENV === 'production',
  api: {
    gqlUrl: process.env.OKKINO_WEB_GQL_URL as string
  },
  storage: {
    url: process.env.OKKINO_WEB_STORAGE_URL as string,
    endpoint: process.env.OKKINO_WEB_STORAGE_ENDPOINT as string
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
