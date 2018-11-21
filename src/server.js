const path = require('path');
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./App');
const { htmlTemplate, fetchData, connectToData } = require('./utils');

const server = express();

server.get('/', (req, res) => {
    const data = fetchData();
    const Cmpt = connectToData(App, data);
    const reactDOM = ReactDOMServer.renderToString(Cmpt);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlTemplate(reactDOM, data));
});

server.get('/client.js', (req, res) => {
    res.sendFile('client.js', { root: path.resolve(__dirname, '../dist') });
})

server.listen(3000, () => console.log('Server listening on 3000'));
