import React, { useContext } from "react";

import { AuthContext } from "../../context/auth.js";
import Signup from "./signup";

import { If, Else, Then } from "react-if";

function Auth(props) {
  const { loggedIn, user } = useContext(AuthContext);

  let render =
    loggedIn && props.capability
      ? user?.capabilities.includes(props.capability)
      : false;
  return (
    <div>
      <If condition={render}>
        <Then>
          <div>{props.children}</div>
        </Then>
        <Else>
          <dev>
            <h1>TODO App</h1>
            <p> Signup / Signin first !!! </p>
            <Signup />
          </dev>
        </Else>
      </If>
    </div>
  );
}

export default Auth;
