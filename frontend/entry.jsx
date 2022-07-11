import React from "react";
import ReactDOM from "react-dom/client"
import configureStore from './store/store'
import Root from './components/root'
import { requestUserWorkspaces } from './actions/workspace_actions'

document.addEventListener("DOMContentLoaded", () => {
  const root = ReactDOM.createRoot(
    document.getElementById('root')
  );

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
  store = configureStore(preloadedState);
  delete window.currentUser
  } else {
    store = configureStore();
  } 

  window.requestUserWorkspaces = requestUserWorkspaces; 
  window.getState = store.getState;
  window.dispatch = store.dispatch; 

  root.render(<Root store = {store} />)
  
});