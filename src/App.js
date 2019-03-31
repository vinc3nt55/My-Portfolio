import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import ErrorPage from "./components/Error/ErrorPage";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contactinfo" component={Contact} />
            <Route component={ErrorPage} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
