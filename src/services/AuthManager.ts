import { TokenManager } from "@/api/TokenManager";
import { get } from "@/api/ApiClient";
import { Tokens, User } from "@/types/User";
import { getPayloadFromJWT } from "@/utils/JwtUtils";

const isLoggedIn = async () => {
  return await TokenManager.hasValid();
};

const isNotLoggedIn = async () => {
  return !(await isLoggedIn());
};

const login = async (tokens: Tokens) => {
  const { userId } = getPayloadFromJWT(tokens.accessToken);
  await TokenManager.set({
    id: userId,
    accessToken: tokens.accessToken,
    refreshToken: tokens.refreshToken,
  });
};

const logout = async () => {
  await TokenManager.remove();
};

const getLoggedUser = async (): Promise<User> => {
  return await get<User>("api/v1/user/info");
};


const AuthManager = {
  login,
  logout,
  isLoggedIn,
  isNotLoggedIn,
  getLoggedUser
};

export default AuthManager;
