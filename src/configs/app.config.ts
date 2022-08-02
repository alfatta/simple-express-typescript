interface AppConfig {
  name: string;
  port: number;
}

const appConfig: AppConfig = {
  name: process.env.APP_NAME || "App",
  port: Number(process.env.PORT) || 3000,
};

export default appConfig;
