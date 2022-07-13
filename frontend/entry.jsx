import React from "react";
import ReactDOM from "react-dom/client"
import configureStore from './store/store'
import Root from './components/root'
import { sendChannelMessage } from './actions/channel_actions' 

document.addEventListener("DOMContentLoaded", () => {
  const root = ReactDOM.createRoot(
    document.getElementById('root')
  );

  let store;
  if (window.currentUser) {
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

  window.sendChannelMessage = sendChannelMessage
  window.getState = store.getState;
  window.dispatch = store.dispatch; 

  root.render(<Root store = {store} />)
  
});

// All rights reserved to the original slack.com. This application is no means an attempt to generate financial revenue. It is a copy of the the actual application. All photos and design philosophy is taken from slack.com