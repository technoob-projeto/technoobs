import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";


export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Header />
        <Home />
        
      </Route>
      <Route exact path="/dashboard/candidate">
      </Route>
      <Route exact path="/dashboard/recruiter"></Route>
    </Switch>
  );
};
