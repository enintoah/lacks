import { 
  Route, 
  Redirect, 
  withRouter 
} from "react-router-dom";
import { connect } from "react-redux";
import React from "react";

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      !loggedIn ? <Component {...props} /> : <Redirect to="/user-dashboard" />
    }
  />
);

const Protected = ({ loggedIn, path, component: Component }) => (
  <Route 
    path={path}
    render={props => (
      loggedIn ? <Component {...props} /> : <Redirect to='/'/>
    )}
  />
);

const mapStateToProps = state => {
  return { 
    loggedIn: Boolean(state.session.id),
    workspaces: state.entities.workspaces
  };
};

export const AuthRoute = withRouter(connect(mapStateToProps,null)(Auth)); 

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));




