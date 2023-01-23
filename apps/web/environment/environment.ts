export const webEnv = {
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
