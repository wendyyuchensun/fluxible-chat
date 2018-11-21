const ReactDOMServer = require('react-dom/server');
const App = require('./App');

console.log(ReactDOMServer.renderToString(App));
