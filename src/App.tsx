import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Show from "./pages/Show/Show";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/show/:id">
            <Show />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
