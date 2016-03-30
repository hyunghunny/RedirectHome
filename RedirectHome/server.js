var http = require('http');
var port = process.env.port || 80;
http.createServer(function (req, res) {
    res.writeHead(301,
        { Location: 'https://sites.google.com/site/connectedxlab/home' }
    );
    res.end();
}).listen(port);