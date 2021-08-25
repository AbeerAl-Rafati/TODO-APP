import React, { useState, useEffect } from "react";
import cookie from "react-cookies";
import jwt from "jsonwebtoken";
import superagent from "superagent";
import base64 from "base-64";
const API = "https://auth-server-401.herokuapp.com";
export const AuthContext = React.createContext();

export default function Auth(props) {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = cookie.load("auth");
    validateToken(token);
  }, []);

  function validateToken(token) {
    if (token !== "null") {
      const user = jwt.decode(token);
      console.log(token, user);
      setLoginState(true, token, user);
    } else {
      setLoginState(false, null, {});
    }
  }
  function setLoginState(loggedIn, token, user) {
    cookie.save("auth", token);
    setUser(user);
    setLoggedIn(loggedIn);
  }

  async function login(username, password) {
    try {
      const response = await superagent
        .post(`${API}/signin`)
        .set(
          "authorization",
          `Basic ${base64.encode(`${username}:${password}`)}`
        );
      console.log(response.body);
      validateToken(response.body.token);
    } catch (error) {
      console.error("LOGIN ERROR", error.message);
    }
  }
  function logout() {
    setLoginState(false, null, {});
  }

  async function signup(username, password, role) {
    try {
      const response = await superagent.post(`${API}/signup`, {
        username,
        password,
        role,
      });

      validateToken(response.body.token);
    } catch (error) {
      console.error("signup ERROR", error.message);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loggedIn,
        setLoggedIn,
        login,
        logout,
        signup,
        setLoginState,
        validateToken,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
