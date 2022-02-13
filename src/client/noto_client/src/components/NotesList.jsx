import React, { useContext } from "react";
import Note from "./Note";
import Context from "../context/context";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function NotesList() {
  const { filteredNotes } = useContext(Context);
  if (filteredNotes.length > 0) {
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
  } else {
    return (
      <Container sx={{ mt: 10 }}>
        <Typography align="center" variant="h3" sx={{ mt: 2 }}>
          Hmm.. no notes!
        </Typography>
        <Typography align="center" variant="h6" sx={{ mt: 2 }}>
          Add your first note using the 'Add Note' button on the left
        </Typography>
      </Container>
    );
  }
}

export default NotesList;
