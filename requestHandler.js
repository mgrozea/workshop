function home(response){
	console.log("Request handler 'home' was called.");

	var body = '<html>' +
		'<head>' +
		'<meta http-equiv="Content-Type" content="text/html; ' +
		'charset=UTF-8" />' +
		'</head>' +
		'<body>' +
		'<form action="/about" method="post">' +
		'<textarea name="text" rows="20" cols="60"></textarea>' +
		'<input type="submit" value="Submit text" />' +
		'</form>' +
		'</body>' +
		'</html>';

	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();
}

function about(response) {
	response.writeHead(200, {
		"Content-Type": "text/plain"
	});
	response.write("You are right! ");
	response.end();
}

exports.home = home;
exports.about = about;
