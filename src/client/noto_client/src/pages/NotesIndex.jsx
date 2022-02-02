import React, { useState, useEffect, useContext } from "react";
import Context from "../context/context";

import NotesList from "../components/NotesList";
import ResponsiveNav from "../components/ResponsiveNav";

const NotesIndex = () => {
  const { notes, setNotes } = useContext(Context);

  const deleteNote = (noteId) => {
    let index = notes.findIndex((note) => {
      return note.id === noteId;
    });
    notes.splice(index, 1);
    setNotes(notes);
  };

  return (
    <div>
      <ResponsiveNav>
        <NotesList deleteNote={deleteNote} />
      </ResponsiveNav>
    </div>
  );
};

export default NotesIndex;
