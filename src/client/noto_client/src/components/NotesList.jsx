import React from "react";
import Note from "./Note";

function NotesList(props) {
  const { notes, deleteNote } = props;

  return (
    <ul>
      {notes.map((note, index) => (
        <li key={index}>
          <Note
            title={note.title}
            description={note.description}
            code={note.code}
            visibility={note.public}
            noteId={note.id}
            deleteNote={deleteNote}
          />
        </li>
      ))}
    </ul>
  );
}
export default NotesList;
