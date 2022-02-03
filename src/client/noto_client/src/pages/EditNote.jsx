import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  TextField,
  Button,
  FormGroup,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import VisibilityButton from "../components/VisibilityButton";
import Context from "../context/context";
// import CustomizedSnackbars from "../components/NewNoteSuccess";



const EditNote = () => {
  
  const { noteId } = useParams();
  
  const initialNote = [];
  const { context, setContext } = useContext(Context);
  // const { setNotes, resetNotes } = useContext(Context);
  const [note, setNote] = useState(initialNote);

  // const [tags, setTags] = useState([]);

  console.log(noteId)

  useEffect(() => {
    fetch(`${noteId}`, {
    // fetch(`${noteId}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((note) => setNote(note))
      .catch((err) => console.log(err));
  }, []);

  console.log(note)

  // const handleChange = (event) => {
  //   setNote({
  //     ...note,
  //     [event.target.name]: event.target.value,
  //   });
  //   console.log(note);
  // };

  // const onCreateNote = async (event) => {
  //   event.preventDefault();
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       title: event.target.title.value,
  //       description: event.target.description.value,
  //       code: event.target.code.value,
  //       public: formData.public,
  //     }),
  //   };
  //   if (
  //     formData.title.length === 0 ||
  //     formData.description.length === 0 ||
  //     formData.code.length === 0
  //   ) {
  //     alert("Can't be empty");
  //   } else {
  //     const newNoteResponse = await fetch("/api/notes", options);
  //     const newNotesJson = await newNoteResponse.json();
  //     setFormData(initialFormState);
  //     // <CustomizedSnackbars />
  //   }
  // };

  // const toggleVisibility = () => {
  //   setFormData({ ...note, public: !note.public });
  //   console.log(note);
  // };

  // const handleTagCheckbox = (event, newTags) => {
  //   event.preventDefault();
  //   console.log(event.target.value);
  //   setTags(newTags);
  // };

  return (
    <h1>Test</h1>
  )

  // return (
  //   <form>
  //     <div>
  //       <TextField
  //         name="title"
  //         label="Title"
  //         value={note.title}
  //         onChange={handleChange}
  //         variant="outlined"
  //         sx={{ my: "1rem", mx: "1rem" }}
  //       />
  //       <FormGroup>
  //         <FormControlLabel
  //           control={
  //             <Checkbox
  //               defaultChecked
  //               onChange={handleTagCheckbox}
  //               value="React"
  //             />
  //           }
  //           label="React"
  //         />
  //         <FormControlLabel
  //           control={
  //             <Checkbox
  //               defaultChecked
  //               onChange={handleTagCheckbox}
  //               value="JS"
  //             />
  //           }
  //           label="JS"
  //         />
  //       </FormGroup>
  //       <TextField
  //         name="description"
  //         label="Description"
  //         value={note.description}
  //         onChange={handleChange}
  //         variant="outlined"
  //         sx={{ my: "1rem", mx: "1rem" }}
  //       />
  //       <VisibilityButton
  //         isPublic={note.public}
  //         toggleVisibility={toggleVisibility}
  //         sx={{ my: "1.5rem" }}
  //       />
  //     </div>
  //     <div>
  //       <TextField
  //         name="code"
  //         label="Code"
  //         value={note.code}
  //         onChange={handleChange}
  //         variant="outlined"
  //         multiline
  //         rows={30}
  //         sx={{ mx: "1rem", my: "1rem", width: "95%" }}
  //       />
  //     </div>
  //     <Button
  //       type="button"
  //       variant="outlined"
  //       href="/"
  //       sx={{ mx: "1rem", my: "1rem" }}
  //     >
  //       Back
  //     </Button>
  //     <Button type="submit" variant="contained" sx={{ mx: "1rem", my: "1rem" }}>
  //       Add Note
  //     </Button>
  //   </form>
  // );
};

export default EditNote;
