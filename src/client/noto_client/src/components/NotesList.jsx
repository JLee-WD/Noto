import React from "react";
import Note from "./Note";

function NotesList(props) {
  const { notes } = props;

  //   const notesList = notes.map((note, index) =>
  //   <li key={index}>{note.title}</li>
  //   )
  //   return (
  //     <div>
  //       <ul>{notesList}</ul>
  //     </div>
  //   )
  // }

  return (
    <ul>
      {notes.map((note, index) => (
        // <p key={index}>{note.title}</p>)
        <li key={index}>
          <Note
            title={note.title}
            description={note.description}
            code={note.code}
            visibility={note.public}
            noteId={note.id}
          />
        </li>
      ))}
    </ul>
  );
}
export default NotesList;
