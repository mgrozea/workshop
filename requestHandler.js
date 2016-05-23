function home(){
	function sleep(milisecond){
		var date = new Date().getTime();
		while (new Date().getTime() < date + milisecond);
	}
	sleep(10000);
	return "Welcome to our application";
}

exports.home = home;
