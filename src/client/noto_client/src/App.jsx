import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotesIndex from "./pages/NotesIndex";
import NewNoteForm from "./pages/NewNoteForm";
import ResponsiveNav from "./components/ResponsiveNav";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NotesIndex />} />
        <Route path="/new" element={<NewNoteForm />} />
        <Route path="/nav" element={<ResponsiveNav />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
