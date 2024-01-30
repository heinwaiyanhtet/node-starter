// console.log("Starting app.js");

const fs = require('fs');

var command = process.argv[2];
console.log('Command: ' ,command);

if(command == 'add'){
    console.log("it is adding a new notes");
} 
else if(command == 'list'){
    console.log("get list");
}
else{
    console.log("command recognized");
}


const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).parse()

if (argv.ships > 3 && argv.distance < 53.5)
{
  console.log('Plunder more riffiwobbles!')
} 
else {
  console.log('Retreat from the xupptumblers!')
}