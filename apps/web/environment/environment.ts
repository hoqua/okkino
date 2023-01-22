export const webEnv = {
  isProd: process.env.OKKINO_ENV === 'development',
  api: {
    gqlUrl: process.env.OKKINO_API_GQL_URL
  }
}

export interface IWebEnv {
  isProd: boolean
  api: {
    gqlUrl: string
  }
}
