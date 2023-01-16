declare namespace NodeJS {
  interface ProcessEnv {
    readonly DATABASE_URL: string;
    readonly API_URL: string;
  }
}
