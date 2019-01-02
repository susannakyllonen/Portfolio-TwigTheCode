import React from "react"
import { Switch, Route } from "react-router-dom"
import App from "../App";
import Portfolio from "../Portfolio"


export default <Switch>
  <Route exact path="/" component={App} />
  <Route exact path="/:name" component={Portfolio} />
</Switch>