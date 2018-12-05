const fs = require("fs");

console.log("Starting notes.js");

const NOTES_FILENAME = "notes-data.json";

var writeJsonToFile = (jsonObj, filename) => {
  var jsonString = JSON.stringify(jsonObj);
  fs.writeFile(filename, jsonString);
};

var saveNotes = jsonObj => {
  writeJsonToFile(jsonObj, NOTES_FILENAME);
};

var fetchNotes = () => {
  if (fs.existsSync(NOTES_FILENAME)) {
    return JSON.parse(fs.readFileSync(NOTES_FILENAME));
  }
  return [];
};

var addNote = (title, body) => {
  var notes = getAll();

  var duplicates = notes.filter(note => note.title === title);
  if (duplicates.length == 0) {
    var note = { title, body };
    notes.push(note);
    saveNotes(notes);
    return note;
  } else {
    console.warn("Duplicate note", title, body);
  }
};

var getAll = () => {
  return fetchNotes();
};

var removeNote = title => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter(x => x.title !== title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
};

var readNote = title => {
  var notes = getAll();
  var filteredNotes = notes.filter(x => x.title == title);

  return filteredNotes.length ? filteredNotes[0] : null;
};

var logNote = (note)=>{
  console.log('----------')
  console.log(`Title : ${note.title}`);
  console.log(`Body : ${note.body}`);
};

var logNoteWithMessage = (message, note) => {
  console.log(message);
  logNote(note);
};

module.exports = {
  addNote,
  getAll,
  removeNote,
  readNote,
  logNote,
  logNoteWithMessage,
};
