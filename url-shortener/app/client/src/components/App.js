import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./header/Header";
import Landing from "./landing/Landing";
import "./style.css";
class App extends Component {
  componentDidMount(){}

  render() {
    return (
      <div className = "container">
        <BrowserRouter>
                <div>
                  <Header />
                  <Switch>
                    <Route path="/" component={Landing} />
                  </Switch>
                </div>
              </BrowserRouter>

      </div>
    );
  }
}

export default App;
