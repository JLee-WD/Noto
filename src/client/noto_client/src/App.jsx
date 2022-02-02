import { BrowserRouter, Routes, Route } from "react-router-dom";

import Context from "./context/context";
import { useState, useEffect } from "react";

import NotesIndex from "./pages/NotesIndex";
import NewNoteForm from "./pages/NewNoteForm";

function App() {
  // const [context, setContext] = useState({});

  const [notes, setNotes] = useState([]);
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

  return (
    <Context.Provider value={{ tags, setTags, notes, setNotes }}>
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
