const http = require('http');
const os = require('os');

const server = http.createServer(function(req, res){
	res.end("Hello from " + os.hostname());
});

server.listen(8000);
