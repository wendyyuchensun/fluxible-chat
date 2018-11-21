const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./App');
const { connectToData } = require('./utils');

const rootNode = document.querySelector('.root');

ReactDOM.hydrate(connectToData(App, window.app.data), rootNode);
