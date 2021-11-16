import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Premium from "./pages/premium/index";
import Help from "./pages/help/index";
import Download from "./pages/download/index";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={Home} />
        <Route path="/premium" component={Premium} />
        <Route path="/help" component={Help} />
        <Route path="/download" component={Download} />
      </Switch>
    </div>
  );
};

export default App;
