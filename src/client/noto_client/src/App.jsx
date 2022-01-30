import { useState, useEffect } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  console.log("notes 1", notes);

  useEffect(() => {
    fetch("/api/notes", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setNotes(data))
      .then((data) => console.log("data", data))
      .catch((err) => console.log(err));
  }, []);

  const noteVar = notes;
  console.log(noteVar);

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {noteVar.map((note) => {
          <li>{note.description}</li>;
        })}
      </ul>
      {noteVar[1].description}
      {console.log(noteVar[0].description)}
    </div>
  );
}

export default App;
