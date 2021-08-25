import React from "react";

import ToDo from "./components/todo/todo.js";
import AuthProvider from "./context/auth";
import Auth from "./components/auth/auth";
import Header from "./components/header/index.js";
import OptionForm from "./components/optionForm";
import OptionsProvider from "./context/options";
import ListProvider from "./context/list";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <Header />
          <Auth capability="read">
            <Switch>
              <OptionsProvider>
                <ListProvider>
                  <Route exact path="/">
                    <ToDo />
                  </Route>
                  <Route exact path="/option">
                    <OptionForm />
                  </Route>
                </ListProvider>
              </OptionsProvider>
            </Switch>
          </Auth>
        </AuthProvider>
      </Router>
    );
  }
}
