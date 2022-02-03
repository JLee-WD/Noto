import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../context/context";
import Note from "../components/Note";
import ResponsiveNav from "../components/ResponsiveNav";

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
      <ul>
        {filteredNotes.map((note, index) => (
          <li key={index}>
            <Note
              title={note.title}
              description={note.description}
              code={note.code}
              isPublic={note.public}
              noteId={note.id}
              deleteNote={deleteNote}
            />
          </li>
        ))}
      </ul>
    </ResponsiveNav>
  );
};

export default NotesIndex;
