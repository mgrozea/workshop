function route(pathname, handlers, response, postData){
	if (typeof handlers[pathname] === 'function'){
		handlers[pathname](response, postData);
	} else {
		response.writeHead(404, {
			"Content-Type": "text/plain"
		});
		response.write("404 Not found");
		response.end();
	}
}

exports.route = route;
