// var obj = {
//     name : 'Carlos'
// };

// var stringObj =  JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj)

// var personString = '{"name":"Carlos", "age":41}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');
var originalNote = {
    title : 'Special Node',
    body : 'Special Body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('note.json', originalNoteString);

var readNoteString = fs.readFileSync('note.json');
var readNote = JSON.parse(readNoteString);
console.log(readNote);