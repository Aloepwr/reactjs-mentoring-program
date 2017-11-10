import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from 'react-router-config';

import routes from './routes';
import configureStore from './store/configureStore';
import "./stylesheets/styles.less";


const store = configureStore(window.PRELOADED_STATE);
delete window.PRELOADED_STATE;


hydrate(
  (
    <Provider store={ store }>
      <BrowserRouter>
        { renderRoutes(routes) }
      </BrowserRouter>
    </Provider>
  ),   
  document.getElementById("react-container")
);