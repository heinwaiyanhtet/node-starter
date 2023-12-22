var url  = require('url');
var http = require('http');
var fs = require('fs');

var adr = 'http://localhost:8080/default.html?year=2017&month=february';
var q = url.parse(adr, true);



console.log(q.host);
console.log(q.pathname);
console.log(q.search);
var qdata = q.query;
console.log(qdata.month);


http.createServer(function (req,res) {

    var q = url.parse(req.url,true);
    var filename = "." + q.pathname;
    fs.readFile(filename,function (err,data) {
        
        if(err){
            res.writeHead(404,{'Content-Type':'text/html'})
            return res.end("404 Not Found");
        }

        res.writeHead(200,{'Context-Type':'text/html'});
        res.write(data);
        return res.end();
    })
    
}).listen(8080);



