var http = require('http');
var fs = require('fs');

http.createServer(function (req,res) {

    fs.appendFile('index.html','Hello Content!',function (error) {
        if(error) throw error;
        console.log('Saved!');
    })

    fs.open('index2.html','w',function (err,file) {
        if(err) throw err;
        console.log("saveed")  
    })

    fs.unlink('index3.html',function (error) {
        if(error) throw error;
        console.log("File deleted!");
    })

    fs.writeFile('index3.html','this is my text',function (error) {
        if(error) throw error;
        console.log("Replaced!");
    })

    fs.readFile('index.html',function (err,data) {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data);
        return res.end();
    })  

    fs.rename('index3.html',"myrenamed.txt",function (error) {
        if(error) throw error;
        console.log("file renamed!");
    })


})
.listen(8080);