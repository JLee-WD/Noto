import React, { useState, useEffect, useContext } from "react";
import Context from "../context/context";
import Note from "../components/Note";
import ResponsiveNav from "../components/ResponsiveNav";
import NotesList from "../components/NotesList";
import Box from "@mui/material/Box";

const NotesIndex = () => {
  const { notes, setNotes, filteredNotes } = useContext(Context);

  const deleteNote = (noteId) => {
    let index = notes.findIndex((note) => {
      return note.id === noteId;
    });
    notes.splice(index, 1);
    setNotes(notes);
  };

  return (
    <ResponsiveNav>
      <NotesList deleteNote={deleteNote} />
    </ResponsiveNav>
  );
};

export default NotesIndex;
