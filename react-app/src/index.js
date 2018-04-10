import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import ReactDOMServer from 'react-dom/server';
import { StaticRouter, Route, BrowserRouter } from 'react-router-dom'

const Home = props =>
  <App />

const Hello = props =>
  <div>Hello</div>

const routes = (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/hello" component={Hello} />
  </div>
)

const Html = props =>
  <html>
    <head><title>My Static Site</title></head>
    <body>
      <div id="app">
        {props.children}
      </div>
      <script src="/index.js"></script>
    </body>
  </html>

export default locals =>
  ReactDOMServer.renderToString(
    <StaticRouter location={locals.path} context={{}}>
      <Html>
      {routes}
      </Html>
    </StaticRouter>
  )

if (typeof document !== 'undefined') {
  ReactDOM.render(
    <BrowserRouter>{routes}</BrowserRouter>,
    document.getElementById('root')
  )
}