import * as request from "./request";

const baseUrl = "http://localhost:3030/users";

export const register = async (userData) => {
  const result = await request.post(`${baseUrl}/register`, { ...userData });
  return result;
};

export const login = async (username, password) => {
  const result = await request.post(`${baseUrl}/login`, { username, password });
  return result;
};

export const logout = async (token = null) => {
  const result = await request.get(`${baseUrl}/logout`, { token });
  return result;
  // can logout without token?
  // no return result?
};
