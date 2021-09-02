import React, { Component } from "react";
import { Route, Redirect, HashRouter } from "react-router-dom";
import main from "../main";
import portfolio from "../portfolio";
import Navigation from "../nav";

class Header extends Component {
    render() {
      return (
        <HashRouter>
          <header>
            <Navigation />
          </header>
  
          <div className="content">
            <Route exact path="/" render={() => <Redirect to="/about" />} />
            <Route path="/about" component={main} />
            <Route path="/portfolio" component={portfolio} />
          </div>
        </HashRouter>
      );
    }
  }
  
  export default Header;
  