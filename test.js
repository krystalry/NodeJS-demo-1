let fs = require('fs');
let http = require('http');

//1.读取文件
//同步
//fs.readFile('1.txt', (err, data) => {
//    console.log(err);
//    console.log(data);
//});

//异步
//let data = fs.readFileSync('1.txt');
//console.log(data.toString());

//-----------------------------------------------------------------

//2.http服务
//let server = http.createServer(function (req, res) {
//    console.log(req.url);
//    //console.log(res);
//    res.statusCode = 201;
//    res.write('Hello');
//    res.end()
//});
//server.listen(9999);
//console.log(9999);

//-----------------------------------------------------------------
