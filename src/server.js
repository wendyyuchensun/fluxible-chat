const path = require('path');
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./App');
const {
    htmlTemplate,
    fetchData,
    matchPath,
    connectToData,
    isAuthenticated
} = require('./utils');
const configs = require('./config');

api.useConfig(config);

const server = express();

server.use((req, res) => {
    const state = {};
    const authToken = getCookie('authToken');

    checkSession(authToken, isValidToken => {
        if (isValidToken) {
            state.authToke = authToken;
        } else {
            clearCookie('authToken');
            state.authToken = null;
        }

        const route = matchPath(req.url);
        if (authorizationNeededForRoute(route) && !isAuthenticated(state)) {
            redirectToSignInPage();
            return;
        }

        if (!config.disableIsomorphic) {
            state.route = route;
            state.data = fetchData(route);
        }

        const Cmpt = connectToData(App, state);
        const reactDOM = ReactDOMServer.renderToString(Cmpt);

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(htmlTemplate(reactDOM, state, config));
    });
});

server.listen(3000, () => console.log('Server listening on 3000'));
