import { hydrate } from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import configureStore from './store/configureStore';
import "./stylesheets/styles.less";


const store = configureStore(window.PRELOADED_STATE);
delete window.PRELOADED_STATE;


hydrate(
  (
    <Provider store={ store }>
      <Router>
        <App />
      </Router>
    </Provider>
  ),   
  document.getElementById("react-container")
);