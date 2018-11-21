const htmlTemplate = reactDom => (`
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Hello World!</title>
        </head>
        <body>
            <div class="root">${reactDom}</div>
            <script src="./client.js"></script>
        </body>
    </html>
`);

module.exports = { htmlTemplate };
