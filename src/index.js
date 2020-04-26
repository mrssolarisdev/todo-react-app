import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import * as serviceWorker from './serviceWorker'
  
var destination = document.querySelector("#container")
  
ReactDOM.render(
    <div>
        <App />
    </div>,
    destination
);
serviceWorker.unregister();