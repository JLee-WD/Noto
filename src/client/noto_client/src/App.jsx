import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotesIndex from "./pages/note-index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NotesIndex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
