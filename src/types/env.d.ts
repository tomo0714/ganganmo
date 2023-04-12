declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_ENV_NAME: 'LOCAL' | 'DEV' | 'STG' | 'PRD'
    readonly DOMAIN: string
    readonly ACCESS_TOKEN: string
    readonly NEXT_PUBLIC_DOMAIN: string
    readonly NEXT_PUBLIC_ACCESS_TOKEN: string
    readonly SEND_GRID_API_KEY: string
    readonly MAIL_FROM: string
  }
}
