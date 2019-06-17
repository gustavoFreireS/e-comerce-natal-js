import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import Store from "./store";
import Cart from "./cart";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Natal js e-comerce</h1>
      <Router>
        <Route exact path="/" component={Store} />
        <Route path="/cart" component={Cart} />
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
