import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Context from "../context/context";
import { TextField, Button } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import VisibilityButton from "../components/VisibilityButton";

const EditNote = () => {
  const { noteId } = useParams();
  const initialNoteState = {
    title: "",
    description: "",
    code: "",
    public: "",
    // tags: [],
  };
  const [note, setNote] = useState(initialNoteState);
  const { tags, setNotes, resetNotes } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/notes/${noteId}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((note) => setNote(note))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
    console.log(note);
  };

  const toggleVisibility = () => {
    setNote({ ...note, public: !note.public });
    console.log(note);
  };

  const onEditNote = async (event) => {
    // event.preventDefault()
    const options = {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: note.id,
        title: note.title,
        description: note.description,
        code: note.code,
        public: note.public,
      }),
    };

    await fetch(`/api/notes/${noteId}`, options);
    const newNotes = await resetNotes();
    console.log(newNotes)
    setNotes(newNotes);
    // navigate("/");
  };

  return (
    <form onSubmit={onEditNote}>
      <div>
        <TextField
          name="title"
          value={note.title}
          onChange={handleChange}
          variant="outlined"
          sx={{ my: "1rem", mx: "1rem" }}
        />
        {/* <ToggleButtonGroup>
          {tags.map((tag, index) => (
            <ToggleButton key={index} value={tag} aria-label={tag.title}>
              {tag.title}
            </ToggleButton>
          ))}
        </ToggleButtonGroup> */}
        <TextField
          name="description"
          value={note.description}
          onChange={handleChange}
          variant="outlined"
          sx={{ my: "1rem", mx: "1rem" }}
        />
        <VisibilityButton
          isPublic={note.public}
          toggleVisibility={toggleVisibility}
          sx={{ my: "1.5rem" }}
        />
      </div>
      <div>
        <TextField
          name="code"
          value={note.code}
          onChange={handleChange}
          variant="outlined"
          multiline
          rows={30}
          sx={{ mx: "1rem", my: "1rem", width: "95%" }}
        />
      </div>
      <Button type="button" variant="outlined" href="/" sx={{ my: "1rem" }}>
        Back
      </Button>
      <Button type="submit" variant="contained" sx={{ mx: "1rem", my: "1rem" }}>
        Save
      </Button>
    </form>
  );
};

export default EditNote;
