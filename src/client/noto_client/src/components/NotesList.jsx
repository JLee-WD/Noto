import React, { useContext } from "react";
import Note from "./Note";
import Context from "../context/context";
import Box from "@mui/material/Box";

function NotesList(props) {
  const { deleteNote } = props;
  const { filteredNotes } = useContext(Context);
  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          display: "grid",
          gap: 1,
          gridTemplateColumns: "repeat(6, 1fr)",
        }}
      >
        {filteredNotes.map((note, index) => (
          <Note
            key={index}
            title={note.title}
            description={note.description}
            code={note.code}
            isPublic={note.public}
            noteId={note.id}
            deleteNote={deleteNote}
          />
        ))}
      </Box>
    </div>
  );
}
export default NotesList;
