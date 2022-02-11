import React, { useContext } from "react";
import Note from "./Note";
import Context from "../context/context";
import Grid from "@mui/material/Grid";

function NotesList() {
  const { filteredNotes } = useContext(Context);
  return (
    <Grid container spacing={2}>
      {filteredNotes.map((note, index) => (
        <Grid key={index} item>
          <Note
            key={index}
            title={note.title}
            description={note.description}
            code={note.code}
            isPublic={note.public}
            noteId={note.id}
          />
        </Grid>
      ))}
    </Grid>
  );
}
export default NotesList;
