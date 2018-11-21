const React = require('react');

const htmlTemplate = (reactDom, data, config) => (`
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
                window.app.state = ${JSON.stringify(data)};
                window.app.config = ${JSON.stringify(config)};
            </script>
            <script src="http://localhost:1234/client.js"></script>
        </body>
    </html>
`);

const fetchData = route => {
    const base = route === 'ten' ? 10 : 100;
    return { number: Math.floor(Math.random() * base) };
}

const connectToData = (Cmpt, data) => {
    return React.createElement(Cmpt, data, null);
};

const matchPath = URL => {
    if (URL === '/10') return 'ten';
    return 'home';
};

const isAuthenticated = state => !!state.authToken;

module.exports = {
    htmlTemplate,
    fetchData,
    connectToData,
    matchPath,
    isAuthenticated
};
