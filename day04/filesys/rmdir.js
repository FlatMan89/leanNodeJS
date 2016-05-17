var fs = require("fs");

console.log("准备删除目录 test/");
fs.rmdir("test/",function(err){
	if(err){
		return console.error(err);
	}
	console.log("读取当前目录");
	fs.readdir("./",function(err, files){
		if(err){
			return console.error(err);
		}
		files.forEach(function(file){
			console.log(file);
		});
	});
});