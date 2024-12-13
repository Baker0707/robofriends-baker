import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit"; // Use combineReducers for multiple reducers
import { searchRobotsReducer, requestRobots } from "./reducers"; // Import reducers
import { createLogger } from "redux-logger";
import { thunk } from "redux-thunk"; // Use the named export 'thunk'
import "./index.css";
import App from "./containers/App";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from "./reportWebVitals";
import "tachyons";

// Create a logger middleware
const logger = createLogger();

// Combine multiple reducers
const rootReducer = combineReducers({
  searchRobots: searchRobotsReducer,
  requestRobots: requestRobots,
});

// Create the Redux store using configureStore and add logger middleware
const store = configureStore({
  reducer: rootReducer, // Use the combined reducers
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

ServiceWorker.register();



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();