const path = require('path');
const express = require('express');
const ReactDOMServer = require('react-dom/server');
const App = require('./App');
const { htmlTemplate } = require('./utils');

const server = express();


server.get('/', (req, res) => {
    const reactDOM = ReactDOMServer.renderToString(App);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlTemplate(reactDOM));
});

server.get('/client.js', (req, res) => {
    res.sendFile('client.js', { root: path.resolve(__dirname, '../dist') });
})

server.listen(3000, () => console.log('Server listening on 3000'));
