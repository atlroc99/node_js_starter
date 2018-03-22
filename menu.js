
console.log('Inside the menu.js page');

var htmlPage = `
	<html>
		<head>
			<meta http-equiv="Content-Type" content="text/html" charset="UTF-8"/>
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		</head>
		
		<body>
			<form>
				<div class="form-group">
					<label for="email">Email address</lable>
					<input type="text" class="form-control">
				</div>
				<div class="form-group">
					<label for="pwd">Password</label>
					<input type="password" class="form-control" placeHolder="password">
				</div>
			</form>
		</body>
	</html>`;


var http = require("http");

function start(){

http.createServer(function(req, res){
	console.log(" Reuqest has been recived for the form");
	res.writeHead(200, {'content-type' : 'text/html'});
	res.write(htmlPage);
	res.end();
}).listen(8888);

	console.log("server has started");

}

exports.start = start;

