console.log('starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
var argv = yargs.argv;

var command = process.argv[2];
// console.log('Command: ', command);
// console.log('Yargs: ', argv);

if (command === 'add'){
  // console.log('adding new note');
  notes.addNote(argv.title, argv.body);
}
else if (command === 'list'){
  console.log('listing all notes');
}
else if (command === 'read'){
  console.log('read is the command');
}
else if (command === 'remove'){
  console.log('note removed');
}
else {
  console.log('command not recognized');
}




// var res = _.uniq([11, 22, 'Zoya',3, 2 ,2 ,1, 4, 'Andy', 'ANdy']);
// var str = os.userInfo().username;
//
// fs.appendFile('greetings.txt', '\r\nhello ' + str,
// function (err) {
//   if (err)
//     console.log('some error occured');
// }
// );
