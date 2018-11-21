const path = require('path');
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./App');
const {
    htmlTemplate,
    fetchData,
    matchPath,
    connectToData
} = require('./utils');

const server = express();

server.use((req, res) => {
    const route = matchPath(req.url);
    const data = fetchData(route);

    const Cmpt = connectToData(App, Object.assign(data, { route: route }));
    const reactDOM = ReactDOMServer.renderToString(Cmpt);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlTemplate(reactDOM, data));
});

server.listen(3000, () => console.log('Server listening on 3000'));
