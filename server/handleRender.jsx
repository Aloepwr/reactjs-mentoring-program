import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes, renderRoutes } from 'react-router-config';
import { Provider } from "react-redux";

import routes from '../src/routes';
import App from '../src/App';
import configureStore from '../src/store/configureStore';


const renderFullPage = (html, preloadedState) => {
  return `
    <html>
      <head>
        <title>Netflix roulette</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
      </head>
      <body>
        <div id="react-container">${html}</div>
        <script>
          window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace( /</g, '\\u003c' )}
        </script>
      </body>
    </html>
  `;
};

const handleRender = (req, res) => {
  const store = configureStore();
  const branch = matchRoutes(routes, req.url);

  const promises = branch.map(({ route, match }) => {
    const fetchData = route.component.fetchData;
    
    return fetchData !== undefined ? fetchData(store, match) : Promise.resolve('');
  });
  
  return Promise.all(promises).then(() => {
    const context = {};
    
    const app = (
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          { renderRoutes(routes) }
        </StaticRouter>
      </Provider>
    );
    
    const html = renderToString(app);

    if (context.url) {
      return res.redirect(context.url);
    }
    
    const preloadedState = store.getState();
  
    return res.send(renderFullPage(html, preloadedState));
  });
};

// const handleRender = (req, res) => {
//   const store = configureStore();
//   const context = {};
  
//   const app = (
//     <Provider store={store}>
//       <StaticRouter location={req.url} context={context}>
//         <App />
//       </StaticRouter>
//     </Provider>
//   );
  
//   const html = renderToString(app);
  
//   if (context.url) {
//     return res.redirect(context.url);
//   }
  
//   const preloadedState = store.getState();
  
//   return res.send(renderFullPage(html, preloadedState));
// };

export default handleRender;