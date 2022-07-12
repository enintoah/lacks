import React from "react";
import ReactDOM from "react-dom/client"
import configureStore from './store/store'
import Root from './components/root'
import { fetchUserWorkspaces } from './util/workspaces_util'

document.addEventListener("DOMContentLoaded", () => {
  const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
  
  window.fetchUserWorkspaces = fetchUserWorkspaces

  let store;
  if (window.currentUser) {
    let workspaces = fetchUserWorkspaces(window.currentUser.id)
    workspaces = workspaces.responseJSON
    const preloadedState = {
      entities: {
        currentUser: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
  store = configureStore(preloadedState);
  delete window.currentUser
  } else {
    store = configureStore();
  } 

  window.getState = store.getState;
  window.dispatch = store.dispatch; 

  root.render(<Root store = {store} />)
  
});