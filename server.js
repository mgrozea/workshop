var http = require("http");
var url = require("url");

function start(route, handlers) {
    http.createServer(function(request, response) {
        var pathname = url.parse(request.url).pathname;
        route(pathname, handlers, response);
    }).listen(8888);

    console.log("Server has started.");
}

exports.start = start;
