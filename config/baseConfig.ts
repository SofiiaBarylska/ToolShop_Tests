import { config as dotenvConfig } from "dotenv";
import { join } from "path";
import { IBaseConfig } from "../typings/env";

dotenvConfig({
  path: join(process.cwd(), ".env"),
});

export const baseConfig: IBaseConfig = {
  WEB_URL: process.env.WEB_URL!,
  USER_EMAIL: process.env.USER_EMAIL!,
  USER_PASSWORD: process.env.USER_PASSWORD!,
  USER_NAME: process.env.USER_NAME!,
  API_URL: process.env.API_URL!,
};
