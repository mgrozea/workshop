var server = require("./server");
var route = require("./router");
var requestHandler = require("./requestHandler");

var handlers = {};
handlers["/"] = requestHandler.home;

server.start(route.route, handlers);
