import { BrowserRouter, Routes, Route } from "react-router-dom";

import Context from "./context/context";
import { useState, useEffect } from "react";

import NotesIndex from "./pages/NotesIndex";
import NewNoteForm from "./pages/NewNoteForm";

function App() {
  // const [context, setContext] = useState({});

  const [notes, setNotes] = useState([]);
  const [tags, setTags] = useState([]);
  const [note, setNote] = useState({});

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

  useEffect(() => {
    fetch("api/tags", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((tags) => setTags(tags))
      .catch((err) => console.log(err));
  }, []);

  const noteId = 14;

  useEffect(() => {
    fetch(`api/notes/${noteId}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((note) => setNote(note))
      .catch((err) => console.log(err));
  }, []);

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

  return (
    <Context.Provider value={{ tags, setTags, notes, setNotes, resetNotes }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NotesIndex notes={notes} tags={tags} />} />
          <Route path="/new" element={<NewNoteForm tags={tags} />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
