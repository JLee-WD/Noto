import React from "react";
import { useContext } from "react";
import Context from "../context/context";
import VisibilityButton from "./VisibilityButton";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";


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

  const onEditNote = async (event) => {
    event.prevent.preventDefault()
  }
  // const updateVisibility = async (noteId) => {
  //   const options = {
  //     method: "PATCH",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       public: formData.public
  //     }),
  //   };
  //   const updateVisibilityResponse = await fetch("/api/notes", options);
  //   const updateVisibilityJson = await updateVisibilityResponse.json();
  // }

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
				/>
      </ul>
    </div>
  );
}

export default Note;
