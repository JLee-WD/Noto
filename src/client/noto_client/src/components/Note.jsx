import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../context/context";
import VisibilityButton from "./VisibilityButton";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import {
  Button,
  ButtonGroup,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

function Note(props) {
  const { setNotes, resetNotes, joins, tags, deleteNote } = useContext(Context);
  const { title, description, code, isPublic, noteId } = props;
  const [visibility, setVisibility] = useState(isPublic);
  const noteJoins = [];
  joins.forEach((join) => {
    if (join.note_id === noteId) {
      noteJoins.push(join);
    }
  });

  const noteTags = [];
  noteJoins.forEach((join) => {
    const newTag = tags.find((tag) => join.tag_id === tag.id);
    noteTags.push(newTag);
  });

  const onDeleteNote = async () => {
    deleteNote(noteId);
    const options = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    await fetch(`/api/notes/${noteId}`, options);
    const newNotes = await resetNotes();
    setNotes(newNotes);
  };

  const toggleVisibility = async () => {
    setVisibility(!isPublic);
    const options = {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: noteId,
        title: title,
        description: description,
        code: code,
        public: !isPublic,
      }),
    };

    await fetch(`/api/notes/${noteId}`, options);
    const newNotes = await resetNotes();
    setNotes(newNotes);
  };

  return (
    <Card sx={{ maxWidth: 345, textDecoration: "none" }}>
      <Link to={`/view/${noteId}`}>
        <CardActionArea>
          {/* <CardMedia></CardMedia> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}: {description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {code}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        {noteTags.map((tag, index) => (
          <Button key={index}>{tag.title}</Button>
        ))}
      </ButtonGroup>
      <EditButton noteId={noteId} />
      <DeleteButton onDeleteNote={onDeleteNote} />
      <VisibilityButton
        isPublic={visibility}
        toggleVisibility={toggleVisibility}
      />
    </Card>
  );
}

export default Note;
