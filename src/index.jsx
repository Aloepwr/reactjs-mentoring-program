import { render } from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./App";
import reducers from "./reducers/reducers";
import "./stylesheets/styles";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

render(
  (
    <Provider store={ store }>
      <Router>
        <App />
      </Router>
    </Provider>
  ),   
  document.getElementById("react-container")
);