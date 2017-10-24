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
  applyMiddleware(thunk)
);

store.subscribe( () => {
  console.log("Store is:", store.getState());
});

render(
  (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  ),   
  document.getElementById("react-container")
);