import React from "react"
import { Switch, Route } from "react-router-dom"
import Portfolio from "../components/Portfolio"
import Index from "../components/Index"



export default <Switch>
  <Route exact path="/" component={Index} />
  <Route exact path="/:name" component={Portfolio} />
</Switch>