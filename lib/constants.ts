export const title = "scrolller";

export const apiUrl = process.env.API_URL;

export const auth = {
  INVALID_USERNAME: "invalid username",
  INVALID_PASSWORD: "invalid password",
  USERNAME_EXISTS: "username exists",
  REGISTER_SUCCESS: "registered successfully",
  LOGIN_SUCCESS: "logged in successfully",
  LOGIN_ERROR: "incorrect username or password",
};

export const urls = {
  LOGIN: `${apiUrl}/auth/login`,
  REGISTER: `${apiUrl}/auth/register`,
};
