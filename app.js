console.log("Starting app.js");

const fs = require('fs');

var command = process.argv[2];
console.log('Command: ' ,command);

if(command == 'add'){
    console.log("it is adding a new notes");
} else if(command == 'list'){
    console.log("get list");
}else{
    console.log("command recognized");
}

