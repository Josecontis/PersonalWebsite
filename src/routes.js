import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home/home.component";
import About from "./pages/About/about.component";
import Skills from "./pages/Skills/skills.component";
import Contacts from "./pages/Contacts/contacts.component";
import Works from "./pages/Works/works.component";

function Routes() {
  return (
    <Switch>
      <Route exact path="/"  component={Home} />
      <Route path="/about" component={About} />
      <Route path="/skills" component={Skills} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/works" component={Works} />
      <Route path="*">
        <Redirect to="/" />
      </Route> 
    </Switch>
  );
}

export default Routes;
