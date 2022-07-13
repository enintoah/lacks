import React from "react";
import UserDashboardContainer from "./user_dashboard/user-dashboard_container";
import LoginFormContainer from "./user_auth/login_form_container";
import SignupFormContainer from "./user_auth/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import HomepageContainer from "./homepage/homepage_container";
import WorkspaceContainer from "./workspace/workspace_container";

const App = () => (
  <div>
    <header>
        <ProtectedRoute path="/workspace/:workspace_id" component={WorkspaceContainer} /> 
        <ProtectedRoute exact path="/user-dashboard" component={UserDashboardContainer} />
        <AuthRoute exact path="/" component={HomepageContainer}/>
        <AuthRoute path="/login" component={LoginFormContainer}/>
        <AuthRoute path="/signup" component={SignupFormContainer}/>
    </header>
  </div>
)

export default App;