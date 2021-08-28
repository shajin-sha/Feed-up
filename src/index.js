import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import {FirebaseContext} from './store/FirebaseContext'
import firebase from "./firebase/config"

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{firebase}} >
    <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


// pwa registertion

serviceWorkerRegistration.register();

reportWebVitals();
