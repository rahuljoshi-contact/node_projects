
const fs = require('fs');
const os = require('os');
const _ = require('lodash');


var res = _.uniq([1, 2, 3, 2 ,2 ,1, 4, 'Andy', 'ANdy']);
console.log(res);

// some  comments

// console.log('12 is a number: '+ _.isNumber(12));
// console.log('andry is a string: ' + _.isString('andy'));
// var str = os.userInfo().username;
// console.log(str);
// // console.log(os.userInfo());
//
// const notes = require('./notes.js');
// console.log(notes.add(10, 34));
//
// fs.appendFile('greetings.txt', '\r\nhello ' + str,
// function (err) {
//   if (err)
//     console.log('some error occured');
// }
//
//
// );
