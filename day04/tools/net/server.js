var net = require("net");
var server = net.createServer(function(connection){
	console.log('client connected');

	connection.write('Hello World!\r\n');
	connection.pipe(connection);
});

server.listen(8080,function(){
	console.log('server is listening 8080');
});