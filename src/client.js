const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./App');
const { connectToData, matchPath, fetchData } = require('./utils');

const route = matchPath(window.location.pathname);
const data = Object.assign(window.app.data, { route: route });
const rootNode = document.querySelector('.root');

ReactDOM.hydrate(connectToData(App, data), rootNode);

window.addEventListener('historyChange', e => {
    ReactDOM.hydrate(connectToData(App, /* empty state */), rootNode);

    const route = macthPath(e.route.path);
    const data = Object.assign(fetchData(route), { route, route });
    ReactDOM.hydrate(connectToData(App, data), rootNode);
});
