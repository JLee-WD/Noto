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

  useEffect(() => {
    fetch("api/notes", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((notes) => setNotes(notes))
      .then((notes) => console.log(notes))
      // .then((notes) => setContext({ notes }))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("api/tags", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((tags) => setTags(tags))
      // .then((tags) => setContext({ tags }))
      .catch((err) => console.log(err));
  }, []);
<<<<<<< HEAD

  // useEffect(() => {
  //   setNotes(notes);
  // }, [notes]);

  console.log("notes", notes);
  console.log("tags", tags);

  const deleteNote = (noteId) => {
    let index = notes.findIndex((note) => {
      return note.id === noteId;
    });
    if (notes.length > 1) {
      notes.splice(index, 1);
      console.log("Updated notes", notes);
      setNotes(notes);
    } else {
      setNotes([]);
    }
  };

  return (
    <div>
      <ResponsiveNav tags={tags}>
=======
  
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
>>>>>>> b69e674794fd4cf547db926537fc2a17d613d7e4
        <NotesList deleteNote={deleteNote} notes={notes} />
      </ResponsiveNav>
    </div>
  );
};

export default NotesIndex;
