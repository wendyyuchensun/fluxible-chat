const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./App');
const { connectToData, matchPath, fetchData } = require('./utils');

const rootNode = document.querySelector('.root');

api.useConfig(windwo.app.config);

if (!config.disableIsomorphic) {
    ReactDOM.hydrate(connectToData(App, window.app.state), rootNode);
} else {
    const route = matchPath(window.location.pathname);
    window.app.state = Object.assign(fetchData(route), { route: route });
    ReactDOM.hydrate(connectToData(App, window.app.state), rootNode);
}

window.addEventListener('historyChange', e => {
    const route = matchPath(e.route.path);
    if (authorizationNeededForRoute(route) && !isAuthenticated(window.app.state) {
        redirectToSignInPage();
        return;
    }

    ReactDOM.hydrate(connectToData(App, /* empty state */), rootNode);
    window.app.state.data = fetchData(route);
    ReactDOM.hydrate(connectToData(App, data), rootNode);
});
