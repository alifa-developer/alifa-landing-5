import { Tokens, TokensWithId } from "@/types/User";
import { cookies } from "next/headers";
import { HttpUnauthorizedError } from "./HttpStatusChecks";
import redis from "@/services/RedisClient";
import { RedirectType, redirect } from "next/navigation";

class UnknownUserTypeInToken extends Error {
  constructor(msg?: string) {
    super(msg ?? "Unknown user type in token");
    Object.setPrototypeOf(this, UnknownUserTypeInToken.prototype);
  }
}

interface LoggedUser {
  id: string;
}

interface AuthCode {
  authCode: string;
}

const loggedUserCookie = {
  cookieKey: "logged_id",
  set: (user: LoggedUser) => {
    cookies().set(loggedUserCookie.cookieKey, JSON.stringify(user), {
      // httpOnly: true,
      // secure: true,
      // sameSite: "strict",
    });
  },
  get: () => {
    const user = cookies().get(loggedUserCookie.cookieKey)?.value;
    if (!user) return undefined;
    return JSON.parse(user) as LoggedUser;
  },
  has: () => {
    return cookies().has(loggedUserCookie.cookieKey);
  },
  remove: async () => {
    const cookie = await cookies();
    cookie.delete(loggedUserCookie?.cookieKey!);
  },
};

const tokenStore = {
  key: () => {
    return `tokens`;
  },
  save: async (tokens: TokensWithId) => {
    await redis.execute((r) =>
      r.hset(tokenStore.key(), tokens.id?.toString(), JSON.stringify(tokens))
    );
  },
  find: async (user: LoggedUser): Promise<TokensWithId | undefined> => {
    const tokens = await redis.execute((r) =>
      r.hget(tokenStore.key(), user.id.toString())
    );
    if (!tokens) return undefined;
    return JSON.parse(tokens) as TokensWithId;
  },
  delete: async (user: LoggedUser) => {
    await redis.execute((r) => r.hdel(tokenStore.key(), user.id.toString()));
  },
};

export class TokenManager {
  private static ongoingRequest?: Promise<TokensWithId> = undefined;

  public static async getRefreshUrl() {
    // const userType = await TokenManager.getUserType();

    // const build = (path: string) => `auth/${path}/refresh-token`;

    // if (userType === UserType.admin) return build("admin");
    // if (userType === UserType.agent) return build("agent");

    return "auth/refresh";
  }

  // private static async getUserType() {
  // 	return TokenManager.getTokenUserType(await TokenManager.getToken("accessToken"));
  // }

  // private static getTokenUserType(token?: string) {
  // 	if (!token) throw new UnknownUserTypeInToken();
  // 	const jwtPayload: any = jwtDecode(token);

  // 	if (!jwtPayload?.type || typeof jwtPayload?.type !== "string") throw new UnknownUserTypeInToken();

  // 	if (!(Object.values(UserType) as string[]).includes(jwtPayload?.type)) {
  // 		throw new UnknownUserTypeInToken();
  // 	}

  // 	return jwtPayload?.type as UserType;
  // }

  private static getRequest(request: Promise<TokensWithId>): any {
    return request;
    // if (TokenManager.ongoingRequest === undefined) {
    // 	TokenManager.ongoingRequest = request;
    // }
    // return TokenManager.ongoingRequest;
  }

  private static isValidJwt(token?: string) {
    return true;
    // return TokenManager.getTokenUserType(token) === type;
  }

  public static async hasValid() {
    if (!loggedUserCookie.has()) return false;

    const tokens = await TokenManager.get();
    if (!tokens) return false;

    return TokenManager.isValidJwt(tokens.accessToken);
  }

  public static async getUserId() {
    const userId = await TokenManager.getId("id");
    return userId;
  }

  private static async get() {
    const user = loggedUserCookie.get();
    if (!user) return undefined;
    return tokenStore.find(user);
  }

  private static async getToken(type: keyof Tokens) {
    const tokens = await TokenManager.get();
    if (!tokens) return undefined;
    return tokens[type];
  }

  private static async getId(type: keyof TokensWithId) {
    const tokens = await TokenManager.get();
    if (!tokens) return undefined;
    return tokens[type];
  }

  public static async getAccessToken() {
    //  return "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IlVTRVIiLCJ1c2VySWQiOiI2NmQwN2U3YzU5YmU5YjZhNWU3NTg4YjkiLCJzdWIiOiJzYWJlckBnbWFpbC5jb20iLCJpYXQiOjE3MjU0NDkxNjksImV4cCI6MTcyNTQ1NTE2OX0.QA9aQO5qF10XQE-uKix18UL1p3UjLHYfC4uCgrFTCgE";
    return await TokenManager.getToken("accessToken");
  }

  public static async getRefreshToken() {
    return await TokenManager.getToken("refreshToken");
  }

  public static async set(tokens: TokensWithId) {
    // const type = TokenManager.getTokenUserType(tokens.accessToken);
    loggedUserCookie.set({ id: tokens.id });
    await tokenStore.save(tokens);
  }

  private static async removeTokens() {
    const removeUser = loggedUserCookie.get();
    if (!removeUser) return undefined;
    await tokenStore.delete(removeUser);
  }

  public static async remove() {
    await TokenManager.removeTokens();
    loggedUserCookie.remove();
  }

  private static removeRequest() {
    TokenManager.ongoingRequest = undefined;
  }

  static async refresh(request: Promise<TokensWithId>) {
    try {
      const tokens = await TokenManager.getRequest(request);
      tokens.id = tokens.user?.id;
      await tokenStore.save(tokens);
    } catch (e) {
      if (e instanceof HttpUnauthorizedError) {
        await TokenManager.removeTokens();
        redirect("/login", RedirectType.replace);
      }
      throw e;
    } finally {
      TokenManager.removeRequest();
    }
  }
}
