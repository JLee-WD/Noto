import React from "react";
import Notes from "./Notes";


function NotesList(props) {

  const {notes} = props
  
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
      <Notes key={index} title={note.title} />)
    )}
    </ul>
  )
}
  export default NotesList;