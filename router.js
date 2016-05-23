function route(pathname, handlers, response){
	if (typeof handlers[pathname] === 'function'){
		handlers[pathname](response);
	} else {
		response.writeHead(404, {
			"Content-Type": "text/plain"
		});
		response.write("404 Not found");
		response.end();
	}
}

exports.route = route;
