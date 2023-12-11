import * as request from "./request";

const baseUrl = "http://localhost:3030/users";

export const register = async (userData) => {
  const result = await request.post(`${baseUrl}/register`, { ...userData });
  return result;
};

export const login = async (userData) => {
  const result = await request.post(`${baseUrl}/login`, { ...userData});
  return result;
};

export const logout = async () => {
  const result = await request.get(`${baseUrl}/logout`);
  return result;
  // can logout without token?
  // no return result?
};
