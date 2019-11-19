import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Employees from "./Employees";
import Form from "./Form";
import Success from "./Success";

const App = () => (
  <div className="mx-auto" align="center" style={{ width: "800px" }}>
    <h1 className="absolute-center">Minimal React</h1>
    <BrowserRouter>
      <div>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link " to="/">
              <h2> List </h2>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/form">
              <h2>Form </h2>
            </Link>
          </li>
        </ul>
      </div>
      <Route exact path="/">
        <Employees />
      </Route>
      <Route path="/form">
        <Form />
      </Route>
      <Route path="/success">
        <Success />
      </Route>
    </BrowserRouter>
  </div>
);

export default App;
