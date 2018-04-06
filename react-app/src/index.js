import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import ReactDOMServer from 'react-dom/server';

//const React = require('react');
//const ReactDOM = require('react-dom');
//const ReactDOMServer = require('react-dom/server');
//const App = require('./components/App');

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();

// Getting there...
// https://jaketrent.com/post/react-routing-static-site-browser/

if (typeof global.document !== 'undefined') {
  ReactDOM.render(<App />, document.getElementById('root'));
  registerServiceWorker();
}

export default locals =>
  ReactDOMServer.renderToString(
    <html>
      <div>
        <h1>{locals.path}</h1>
      </div>
    </html>
  )