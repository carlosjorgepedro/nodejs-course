console.log("Starting app.");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes");

const titleOptions = {
  describe: "Title of note.",
  demand: true,
  alias: "t"
};
const bodyOptions = {
  describe: "Content of note.",
  demand: true,
  alias: "b"
};

const argv = yargs
  .command("add", "Add a new note", {
    title: titleOptions,
    body: bodyOptions
  })
  .command("list", "List all notes.")
  .command("read", "Read a note.", {
    title: titleOptions
  })
  .command("remove", "Delete a note", {
    title: titleOptions
  })
  .help().argv;

var command = process.argv[2];
console.log("Command :", command);

if (command == "add") {
  var note = notes.addNote(argv.title, argv.body);
  note
    ? notes.logNoteWithMessage("Note Saved", note)
    : console.log("Note title already in use.");
} else if (command == "remove") {
  notes.removeNote(argv.title)
    ? console.log("Note was removed.")
    : console.log("Note not found.");
} else if (command == "read") {
  var note = notes.readNote(argv.title);
  note
    ? notes.logNoteWithMessage("Note Found", note)
    : console.log("Note not found.");
} else if (command == "list") {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length + 1} notes`);
  allNotes.forEach(notes.logNote);
} else {
  console.log("No Command.");
}
