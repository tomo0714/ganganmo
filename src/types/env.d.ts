declare namespace NodeJS {
  interface ProcessEnv {
    readonly DOMAIN: string
    readonly ACCESS_TOKEN: string
    readonly NEXT_PUBLIC_DOMAIN: string
    readonly NEXT_PUBLIC_ACCESS_TOKEN: string
  }
}
