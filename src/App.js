import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ErrorPage from "./components/Error/ErrorPage";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="https://vinc3nt55.github.io/My-Portfolio/" component={Home} exact />
            <Route path="https://vinc3nt55.github.io/My-Portfolio/about" component={About} />
            <Route path="https://vinc3nt55.github.io/My-Portfolio/skills" component={Skills} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contactinfo" component={Contact} />
            <Route component={ErrorPage} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
