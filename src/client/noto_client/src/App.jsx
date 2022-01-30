import React, { useState, useEffect } from "react";
import NotesList from "./NotesList";
function App() {
  const initialNotes = [];

  const [notes, setNotes] = useState(initialNotes);

  const addNotes = (note) => {
    setNotes([note, ...notes]);
  };

  // console.log("notes", notes);

  useEffect(() => {
    fetch("api/notes", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((notes) => setNotes(notes))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NotesList notes={notes} />
    </div>
  );
}

export default App;
