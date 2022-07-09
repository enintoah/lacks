import React from "react";
import GreetingContainer from "./user_workspaces/greeting_container";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./user_auth/login_form_container";
import SignupFormContainer from "./user_auth/signup_form_container";
import { AuthRoute } from "../util/auth_route_util";

const App = () => (
  <div>
    <header>
      {/* <h1>Lacks</h1> */}
      <Route path="/greeting" component={GreetingContainer} />
      <Route path="/" />
    </header>
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer}/>
      <AuthRoute path="/signup" component={SignupFormContainer}/>
    </Switch>
  </div>
)

export default App;