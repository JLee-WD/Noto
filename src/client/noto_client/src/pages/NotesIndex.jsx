import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "../context/context";

import NotesList from "../components/NotesList";
import ResponsiveNav from "../components/ResponsiveNav";

const NotesIndex = () => {
  // const initialNotes = [];
  const { setContext } = useContext(Context);

  const [notes, setNotes] = useState([]);

  console.log("notes", notes);

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
  }, []);
  return (
    <div>
      <ResponsiveNav>
        <NotesList notes={notes} />
        <Link to="/new">New Note</Link>
      </ResponsiveNav>
    </div>
  );
};

export default NotesIndex;
