 


var http = require("http");

function start(){
	function onRequest(request, response)
	{
		console.log("request has been recieved");
		response.writeHead(200, {'content-type' : 'text/html'});
		response.write("<h3> This is a heading h3</h3>");
		response.write("hello, world");
		response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("server has started");
}

exports.start = start;

