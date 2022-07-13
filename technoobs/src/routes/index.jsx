import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import DashRecruiter from "../pages/DashRecruiter";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Header />
        <Home />
      </Route>

      <Route exact path="/dashboard/candidate"></Route>
      <Route exact path="/dashboard/recruiter"></Route>

      <Route exact path="/recruiter" component={DashRecruiter}>
        <Header />
        <DashRecruiter />
      </Route>
    </Switch>
  );
};
