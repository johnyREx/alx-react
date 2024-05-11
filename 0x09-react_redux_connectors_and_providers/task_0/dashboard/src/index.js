import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'; // Import Provider from react-redux
import { createStore } from 'redux'; // Import createStore from Redux
import App from "./App/App";
import uiReducer from "./reducers/uiReducer"; // Import your uiReducer

// Create a Redux store containing the uiReducer state
const store = createStore(uiReducer);

ReactDOM.render(
  <Provider store={store}> {/* Wrap the App component with Provider and pass the Redux store */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
