import { trimChar } from "@/utils/StringUtils";

enum AppMode {
  development = "development",
  production = "production",
}

export interface Config {
  appMode: AppMode;
  isInProduction: () => boolean;
  apiUrl: string;
  makeApiUrl: (path: string) => string;
  mapKey: string;
  redis: {
    host: string;
    password: string;
    port: number;
  };
  hostURL: string | undefined;
  googleClientId: string;
  facebookClientId: string;
  googleMapKey: string;
  calendyUserUrl: string | string;
  tidyCalPath: string;
  ghost: {
    url: string;
    contentKey: string;
  };
  domain: string;
}

const getAppMode = (): AppMode => {
  const mode = process.env.APP_MODE;
  if (!mode) return AppMode.production;
  if (!(mode in AppMode)) return AppMode.production;

  return mode as AppMode;
};

const getRedisPort = () => {
  // const p = process.env.REDIS_PORT;
  // if (p) {
  //   try {
  //     return parseInt(p);
  //   } catch {}
  // }
  return 6379;
};
const getRedisConfig = () => {
  return {
    // host: process.env.REDIS_HOST ?? "redis",

    host: "redis",
    port: getRedisPort(),
    // port: 10060,
    password: process.env.REDIS_PASSWORD ?? "",
  };
};

const getGhostConfig = () => {
  return {
    url: process.env.GHOST_URL as string,
    contentKey: process.env.GHOST_CONTENT_KEY as string,
  };
};

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://alifa-api.dev-polygontech.xyz";
const mapKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY ?? "AIzaSyAvZAP3J--SJqxhgXYP80JfNxlPbWycY9M";
const appMode = getAppMode();
const googleClientId = process.env.GOOGLE_CLIENT_ID ?? "";
const facebookClientId = process.env.FACEBOOK_ID ?? "";
const googleMapKey = process.env.GOOGLE_MAP_KEY ?? "";
const calendyUserUrl = process.env.NEXT_PUBLIC_CALENDLY_OWNER_URL ?? "";
const tidyCalPath = process.env.TIDYCAL_DATAPATH ?? "";
const domain = process.env.DOMAIN ?? "alifaedtech.com";

const hostURL = process.env.NEXT_PUBLIC_PAHO ?? "";
const config: Config = {
  appMode,
  isInProduction: () => appMode === AppMode.production,
  apiUrl,
  makeApiUrl: (path: string) => {
    return `${trimChar(apiUrl, "/")}/${trimChar(path, "/")}`;
  },
  mapKey,
  redis: getRedisConfig(),
  hostURL,
  googleClientId,
  facebookClientId,
  googleMapKey,
  calendyUserUrl,
  tidyCalPath,
  domain,
  ghost: getGhostConfig(),
};

export default config;
