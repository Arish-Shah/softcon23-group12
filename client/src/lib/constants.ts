export const apiUrl = "http://localhost:8000/api";

export const urls = {
  LOGIN: `${apiUrl}/auth/login`,
  REGISTER: `${apiUrl}/auth/register`,
  ME: `${apiUrl}/auth/me`,
  LOGOUT: `${apiUrl}/auth/logout`,
  FEED: `${apiUrl}/feed`,
  SUB: (name: string) => `${apiUrl}/r/${name}`,
  POST: (id: string) => `${apiUrl}/post/${id}`,
};
