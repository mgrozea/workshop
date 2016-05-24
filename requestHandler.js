function home(response){
	setTimeout(function(){
		response.writeHead(200, {
			"Content-Type": "text/plain"
		});
		response.write("Welcome to our application");
		response.end();
	}, 5000);
}

function about(response) {
	response.writeHead(200, {
		"Content-Type": "text/plain"
	});
	response.write("We are a cool team");
	response.end();
}

exports.home = home;
exports.about = about;
