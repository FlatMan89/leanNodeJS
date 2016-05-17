var http = require("http");
var querystring = require("querystring");
var util = require("util");

http.createServer(function(req,res){
	var post = ""; // 定义了一个posy变量，用于暂存请求体信息

	req.on('data', function(chunk){
		post += chunk;
	});

	req.on('end', function(){ //在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回
		post = querystring.parse(post);
		res.end(util.inspect(post));
	});
}).listen(3000);