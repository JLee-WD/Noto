import React from "react";
// import Notes from "./Notes";


function NotesList(props) {

  const {notes} = props
  const notesList = notes.map((note, index) =>
  <li key={index}>{note.title}</li>
  )

  return (
    <div>
      <ul>{notesList}</ul>
    </div>
  )
}
  export default NotesList;