import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Details from "./routes/Details";
import Naviation from "./components/Naviation";

function App() {
  return (
    <HashRouter>
      <Naviation></Naviation>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/movie/:id" component={Details}></Route>
    </HashRouter>
  );
}

export default App;
