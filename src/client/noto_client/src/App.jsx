import { BrowserRouter, Routes, Route } from "react-router-dom";

import Context from "./context/context";
import { useState, useEffect } from "react";

import NotesIndex from "./pages/NotesIndex";
import NewNoteForm from "./pages/NewNoteForm";

function App() {
  // const [context, setContext] = useState({});

  const [notes, setNotes] = useState([]);
  const [tags, setTags] = useState([]);
  const [joins, setJoins] = useState([]);

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

  useEffect(() => {
    fetch("api/note_tags", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((joins) => setJoins(joins))
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
    <Context.Provider
      value={{
        tags,
        setTags,
        notes,
        setNotes,
        joins,
        setJoins,
        resetNotes,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NotesIndex />} />
          <Route path="/new" element={<NewNoteForm />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
