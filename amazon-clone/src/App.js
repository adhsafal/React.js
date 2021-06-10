import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route path="/checkout">
              <Header />
              <h1>Checkout Page</h1>
            </Route>
            <Route path="/login">
              <h1>Login Page</h1>
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;