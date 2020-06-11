import React, { Component, Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/layouts/NavBar";
import Index from "./components/layouts/Index";
import Lyrics from "./components/tracks/Lyrics";
import { Provider } from "./context";

class App extends Component {
  testLang = (
    <Fragment>
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/lyrics/track/:idTest" component={Lyrics} />
        </Switch>
      </div>
    </Fragment>
  );

  render() {
    return (
      <Provider>
        <Router>{this.testLang}</Router>
      </Provider>
    );
  }
}

export default App;
