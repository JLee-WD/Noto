import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../context/context";

import NotesList from "../components/NotesList";
import ResponsiveNav from "../components/ResponsiveNav";

const NotesIndex = () => {
  const initialNotes = [];
  const { context, setContext } = useContext(Context);

  const [notes, setNotes] = useState(initialNotes);
  const [tags, setTags] = useState([]);

  console.log("notes", notes);
  console.log("tags", tags);

  useEffect(() => {
    fetch("api/notes", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((notes) => setNotes(notes))
      .then((notes) => setContext(notes))
      .catch((err) => console.log(err));
  },[]);

  useEffect(() => {
    fetch("api/tags", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((tags) => setTags(tags))
      .then((tags) => setContext(tags))
      .catch((err) => console.log(err));
  }, []);
  
  const deleteNote = (noteId) => {
    let index = notes.findIndex((note) => {
      return note.id === noteId
    })
    notes.splice(index, 1)
    setNotes(notes)
  }

  return (
    <div>
      <ResponsiveNav>
        <NotesList deleteNote={deleteNote} notes={notes} />
      </ResponsiveNav>
    </div>
  );
};

export default NotesIndex;
