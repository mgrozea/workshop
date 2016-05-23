function route(pathname, handlers){
	if (typeof handlers[pathname] === 'function'){
		handlers[pathname]();
	} else {
		console.log("404 Not found");
	}
}

exports.route = route;
