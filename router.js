function route(pathname, handlers){
	if (typeof handlers[pathname] === 'function'){
		return handlers[pathname]();
	} else {
		return "404 Not found";
	}
}

exports.route = route;
