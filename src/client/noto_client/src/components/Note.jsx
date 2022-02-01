import React from "react";
import { useContext } from "react";
import Context from "../context/context";

function Note(props) {
  const { setContext } = useContext(Context);
  const { title, description, code, visibility, noteId, deleteNote } = props;

  const onDeleteNote = async (event) => {
    event.preventDefault();
    deleteNote(noteId)
    const options = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const newNoteResponse = await fetch(`/api/notes/${noteId}`, options);
    const notes = await newNoteResponse.json();
    setContext({ notes });
  };

  return (
    <div>
      <ul>
        <li>Title: {title}</li>
        <li>Description: {description}</li>
        <li>
          Example: <code>{code}</code>
        </li>
        <button onClick={onDeleteNote}>Delete Note</button>
      </ul>
    </div>
  );
}

export default Note;
