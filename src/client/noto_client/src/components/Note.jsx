import React from "react";

function Note(props) {
  const { title, description, code, visibility, noteId } = props;

  const onDeleteNote = async (event) => {
    event.preventDefault();
    const options = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const newNoteResponse = await fetch(`/api/notes/${noteId}`, options);
    const newNotesJson = await newNoteResponse.json();
    console.log("Deleted Note", newNotesJson);
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
