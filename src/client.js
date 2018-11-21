const ReactDOM = require('react-dom');
const App = require('./App');

ReactDOM.hydrate(App, document.querySelector('.root'));
