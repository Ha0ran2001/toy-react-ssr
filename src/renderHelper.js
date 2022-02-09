import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Routes from './client/Routes';

const render = (req, store) => {
  const context = {
    css: [],
  };

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        {renderRoutes(Routes)}
      </StaticRouter>
    </Provider>
  );

  const css = context.css.length ? context.css.join('\n') : '';

  const html = `
    <html>
      <head>
        <style>
          ${css}
        </style>
      </head>
        <body>
          <div id="root">${content}</div>
          <script src="bundle.js"></script>
        </body>
    </html>
  `;
  return html;
};

export default render;
