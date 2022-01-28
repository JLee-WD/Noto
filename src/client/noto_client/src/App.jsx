import { useState, useEffect } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  console.log("notes", notes);

  useEffect(() => {
    fetch("/api/notes", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setNotes(data))
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return <p>{notes[1].title}</p>;
}

export default App;
