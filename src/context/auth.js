import React, { useState } from "react";
import cookie from "react-cookies";
import jwt from "jsonwebtoken";
import superagent from "superagent";
import base64 from "base-64";
const API = "https://auth-server-401.herokuapp.com";
export const AuthContext = React.createContext();

export default function Auth(props) {
  const [state, setState] = useState({
    loggedIn: false,
    user: {},
  });

  useEffect(() => {
    const token = cookie.load("auth");
    this.validateToken(token);
  }, []);

  validateToken = (token) => {
    // don't verify in the frontend!!
    // const user = jwt.verify(token,'secret')
    if (token !== "null") {
      const user = jwt.decode(token);
      console.log(token, user);
      setLoginState(true, token, user);
    } else {
      setLoginState(false, null, {});
    }
  };
  setLoginState = (loggedIn, token, user) => {
    cookie.save("auth", token);
    setState({ token, loggedIn, user });
  };
  login = async (username, password) => {
    // headers{authorization: "Basic anything="}
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
  };
  logout = () => {
    setLoginState(false, null, {});
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}
