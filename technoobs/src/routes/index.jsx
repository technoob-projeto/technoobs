import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import DashRecruiter from "../pages/DashRecruiter";
import DashCandidate from "../pages/DashCandidate";

export const Router = () => {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <Header />
        <Home
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>

      <Route exact path="/candidate" component={DashCandidate}>
        <Header />
        <DashCandidate />
      </Route>

      <Route exact path="/recruiter" component={DashRecruiter}>
        <Header />
        <DashRecruiter
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
    </Switch>
  );
};
