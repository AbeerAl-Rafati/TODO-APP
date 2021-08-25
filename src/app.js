import React from "react";

import ToDo from "./components/todo/todo.js";
import AuthProvider from "./context/auth";
import Auth from "./components/auth/auth";
import Header from "./components/header/index.js";
export default class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <Header />
        <Auth capability="read">
          <ToDo />
        </Auth>
      </AuthProvider>
    );
  }
}
