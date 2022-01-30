import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotesIndex from "./pages/note-index";
import NewNoteForm from "./pages/new-note-form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NotesIndex />} />
        <Route path="/new" element={<NewNoteForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
