import React, { useState } from "react";
import { useContext } from "react";
import Context from "../context/context";
import VisibilityButton from "./VisibilityButton";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";


function Note (props) {
  const { setContext } = useContext(Context);
  const { title, description, code, isPublic, noteId, deleteNote } = props;

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

  const onEditNote = async (event) => {
    event.preventDefault()
  }

  const [visibility, setVisibility] = useState(isPublic)

  const toggleVisibility = async (event) => {
    setVisibility(!visibility);
    const options = {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: noteId,
        title: title,
        description: description,
        code: code,
        public: visibility
      }),
    };
    const updateVisibilityResponse = await fetch(`/api/notes/${noteId}`, options);
    const notes = await updateVisibilityResponse.json();
    setContext({ notes });
    console.log(notes)
  }

  return (
    <div>
      <ul>
        <li>Title: {title}</li>
        <li>Description: {description}</li>
        <li>
          Example: <code>{code}</code>
        </li>
        <EditButton noteId={noteId} onEditNote={onEditNote} />
        <DeleteButton onDeleteNote={onDeleteNote} />
        <VisibilityButton
					isPublic={visibility}
          toggleVisibility={toggleVisibility}
				/>
      </ul>
    </div>
  );
}

export default Note;
