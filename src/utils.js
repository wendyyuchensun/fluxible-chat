const React = require('react');

const htmlTemplate = (reactDom, data) => (`
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Hello World!</title>
        </head>
        <body>
            <div class="root">${reactDom}</div>
            <script>
                window.app = {};
                window.app.data = ${JSON.stringify(data)};
            </script>
            <script src="./client.js"></script>
        </body>
    </html>
`);

const fetchData = () => ({ number: Math.floor(Math.random() * 100) })

const connectToData = (Cmpt, data) => React.createElement(Cmpt, data, null);

module.exports = { htmlTemplate, fetchData, connectToData };
