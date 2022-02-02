import { BrowserRouter, Routes, Route } from "react-router-dom";

import Context from "./context/context";
import { useState } from "react";

import NotesIndex from "./pages/NotesIndex";
import NewNoteForm from "./pages/NewNoteForm";

function App() {
  const [context, setContext] = useState([]);

  console.log(context);

  return (
    <Context.Provider value={{ context, setContext }}>
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
