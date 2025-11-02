import config from "@/types/Config";
import { TokenManager } from "./TokenManager";
import { buildHttpError, isUnauthorized } from "./HttpStatusChecks";
import logger from "@/services/Logger";
import { HttpHeaders, HttpMethod } from "./Types";
import { buildFetchOptions, getRefreshAuthHeader } from "./RequestBuilder";
import { TokensWithId } from "@/types/User";
import { trimChar } from "@/utils/StringUtils";

const callRefreshToken = async () => {
  const refreshRequest = call<TokensWithId>(
    HttpMethod.post,
    await TokenManager.getRefreshUrl(),
    await getRefreshAuthHeader(),
    {
      refreshToken: await TokenManager.getRefreshToken(),
    },
    false
  );
  await TokenManager.refresh(refreshRequest);
};

const isResponseJson = (res: Response) => {
  return res.headers.get("content-type")?.includes("application/json");
};

export const getTag = (uri: string | (() => string)) => {
  const url = typeof uri === "string" ? uri : uri();
  return trimChar(url, "/").replace("api/v1/", "");
};

const call = async <T>(
  method: HttpMethod,
  uri: string | (() => string),
  headers: HttpHeaders,
  body: object | undefined = undefined,
  shouldRefresh: boolean = true
): Promise<T> => {
  const options = await buildFetchOptions(method, headers, body);
  const url = typeof uri === "string" ? config.makeApiUrl(uri) : uri();

  const apiCallStartLog = { url, method, headers: options.headers, body };
  logger.apiCallStart(apiCallStartLog);
  const res = await fetch(url, {
    ...options,
    ...{
      next: {
        tags: [getTag(uri)],
        revalidate: 0,
      },
    },
  });
  if (
    isUnauthorized(res.status) &&
    "Authorization" in options.headers &&
    shouldRefresh
  ) {
    await callRefreshToken();
    return call(method, uri, headers, body, false);
  }

  if (res.status === 204) {
    logger.apiFinishedSuccess({
      ...apiCallStartLog,
      status: res.status,
      data: null,
    });
    return null as T;
  }

  let data = {};
  if (isResponseJson(res)) {
    try {
      // data = await res.json();
      const clonedResponse = res.clone();
      data = await clonedResponse.json();
    } catch (e) {
      data = { message: res.statusText };
      logger.apiFinishedError({ ...apiCallStartLog, status: res.status, data });
      throw buildHttpError(res.status, data);
    }

    if (!res.ok) {
      logger.apiFinishedError({ ...apiCallStartLog, status: res.status, data });
      throw buildHttpError(res.status, data);
    }

    logger.apiFinishedSuccess({ ...apiCallStartLog, status: res.status, data });
    return data as T;
  } else {
    const blob = await res.blob();
    return blob as unknown as T;
  }
};

export function get<T>(
  uri: string,
  headers: HttpHeaders = {},
  body: object | undefined = undefined
): Promise<T> {
  return call(HttpMethod.get, uri, headers, body);
}

export function post<T>(
  uri: string,
  body: object,
  headers: HttpHeaders = {}
): Promise<T> {
  return call(HttpMethod.post, uri, headers, body);
}

export function put<T>(
  uri: string,
  body: object,
  headers: HttpHeaders = {}
): Promise<T> {
  return call(HttpMethod.put, uri, headers, body);
}

export function patch<T>(
  uri: string,
  body: object,
  headers: HttpHeaders = {}
): Promise<T> {
  return call(HttpMethod.patch, uri, headers, body);
}

export function del<T>(uri: string, headers: HttpHeaders = {}): Promise<T> {
  return call(HttpMethod.del, uri, headers);
}
