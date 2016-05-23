var http = require("http");
var url = require("url");
//var querystring = require("querystring");
//querystring.parse(postData)

function start(route, handlers) {
    http.createServer(function(request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        route(pathname, handlers, response);
       /* request.addListener("data", function(postDataChunk) {

        });

        request.addListener("end", function() {

        });*/
    }).listen(8888);

    console.log("Server has started.");
}

exports.start = start;
