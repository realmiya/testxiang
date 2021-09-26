import "./App.css";
import "../src/components/header";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from 'react-router-dom';
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { history } from './helpers';
import { ROUTES } from './routes';
import styled from "styled-components";

function App() {
  const [open, setOpen] = useState(true);
  function hideNav() {

    setOpen(false);
  }
  function showNav() {
    setOpen(true);
  }
  return (
    <>
      <div className="App">
        <Router history={history} >
          <Header open={open} hideNav={hideNav} showNav={showNav} />
          <div className="main">
            <Sidebar open={open} hideNav={hideNav} showNav={showNav} />
            <div className="container">
              <Switch>
                {/* <PrivateRoute exact path="/homepage" component={ HomePage } /> */}
                {ROUTES.map((route) => (
                  <Route
                    key={route.key}
                    path={route.path}
                    exact
                    component={route.page}
                  />
                ))}
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </>
  );
}
export default App;
