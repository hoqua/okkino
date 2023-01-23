import * as process from 'node:process'

export const apiEnv = {
  isProd: process.env.OKKINO_ENV === 'production',
  api: {
    port: Number(process.env.OKKINO_API_PORT)
  },
  db: {
    url: process.env.OKKINO_DB_URL
  }
}

export interface IApiEnv {
  isProd: boolean
  api: {
    port: number
  }
  db: {
    url: string
  }
}
