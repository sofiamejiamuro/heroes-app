import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Components
import { Navbar } from '../components/ui/Navbar';
export const AppRouter = () => {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};
