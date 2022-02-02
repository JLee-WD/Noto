import React, { useState } from "react";
import { useContext } from "react";
import Context from "../context/context";
import VisibilityButton from "./VisibilityButton";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

function Note(props) {
  const { setNotes } = useContext(Context);
  const { title, description, code, isPublic, noteId, deleteNote } = props;
  const [visibility, setVisibility] = useState(isPublic);

  const onDeleteNote = async (event) => {
    event.preventDefault();
    deleteNote(noteId);
    const options = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    await fetch(`/api/notes/${noteId}`, options);
    const newNotes = await resetNotes();
    setNotes(newNotes);
  };

  const onEditNote = async (event) => {
    event.prevent.preventDefault();
  };

  const resetNotes = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    const notesFetch = await fetch("/api/notes", options);
    const newNotes = notesFetch.json();
    return newNotes;
  };

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
        public: visibility,
      }),
    };

    await fetch(`/api/notes/${noteId}`, options);
    const newNotes = await resetNotes();
    setNotes(newNotes);
  };

  return (
    <div>
      <ul>
        <li>Title: {title}</li>
        <li>Description: {description}</li>
        <li>
          Example: <code>{code}</code>
        </li>
        <EditButton onEditNote={onEditNote} />
        <DeleteButton onDeleteNote={onDeleteNote} />
        {/* toggleVisibility={}
					sx={{}} */}
        <VisibilityButton
          isPublic={visibility}
          toggleVisibility={toggleVisibility}
        />
      </ul>
    </div>
  );
}

export default Note;
