console.log("Starting app.js");

const fs = require('fs');
// const _ = require('load')

var command = process.argv[2];
console.log('Command: ' ,command);

if(command == 'add'){
    console.log("it is adding a new notes");
}


