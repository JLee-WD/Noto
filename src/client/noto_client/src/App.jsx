import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotesIndex from "./pages/NotesIndex";
import NewNoteForm from "./pages/NewNoteForm";

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
