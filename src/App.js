import React, { Component } from "react";
import "./App.css";
import "./Media.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import ErrorPage from "./components/Error/ErrorPage";
import Resume from "./components/Resume/Resume";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

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
            <Route path="/resume" component={Resume} />
            <Route component={ErrorPage} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
