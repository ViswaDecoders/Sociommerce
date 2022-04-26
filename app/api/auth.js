import client from "./client";

const endpoint = "/api";

const login = (email, password) =>
  client.post("/members/api/login_user/", { email: email, password: password });

const logout = () => client.get("/members/api/logout_user/");

const register = (name, email, password) =>
  client.post("/members/api/register_user/", {
    username: name,
    email: email,
    password: password,
  });

export default {
  login,
  logout,
  register,
};
