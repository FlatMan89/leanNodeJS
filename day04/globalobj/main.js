console.log("__filename:"+__filename);
console.log("__dirname:"+__dirname);

function printHello(){
	console.log("setTimeout:Hello, World!");
}
// 两秒后执行以上函数
setTimeout(printHello,2000);