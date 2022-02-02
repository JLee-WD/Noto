import React, { useState, useContext } from "react";
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

const NewNoteForm = () => {
  const initialFormState = {
    title: "",
    description: "",
    code: "",
    public: false,
    tags: [],
  };

  const [formData, setFormData] = useState(initialFormState);
  const { tags } = useContext(Context);

  console.log("New Note Form", context);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log(formData);
  };

  const onCreateNote = async (event) => {
    event.preventDefault();
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: event.target.title.value,
        description: event.target.description.value,
        code: event.target.code.value,
        public: formData.public,
      }),
    };
    if (
      formData.title.length === 0 ||
      formData.description.length === 0 ||
      formData.code.length === 0
    ) {
      alert("Can't be empty");
    } else {
      const newNoteResponse = await fetch("/api/notes", options);
      const newNotesJson = await newNoteResponse.json();
      setFormData(initialFormState);
      // <CustomizedSnackbars />
    }
  };

  const toggleVisibility = () => {
    setFormData({ ...formData, public: !formData.public });
    console.log(formData);
  };

  const handleTagCheckbox = (event, newTags) => {
    event.preventDefault();
    console.log(event.target.value);
  };

  return (
    <form onSubmit={onCreateNote}>
      <div>
        <TextField
          name="title"
          label="Title"
          value={formData.title}
          onChange={handleChange}
          variant="outlined"
          sx={{ my: "1rem", mx: "1rem" }}
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                onChange={handleTagCheckbox}
                value="React"
              />
            }
            label="React"
          />
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                onChange={handleTagCheckbox}
                value="JS"
              />
            }
            label="JS"
          />
        </FormGroup>
        <TextField
          name="description"
          label="Description"
          value={formData.description}
          onChange={handleChange}
          variant="outlined"
          sx={{ my: "1rem", mx: "1rem" }}
        />
        <VisibilityButton
          isPublic={formData.public}
          toggleVisibility={toggleVisibility}
          sx={{ my: "1.5rem" }}
        />
      </div>
      <div>
        <TextField
          name="code"
          label="Code"
          value={formData.code}
          onChange={handleChange}
          variant="outlined"
          multiline
          rows={30}
          sx={{ mx: "1rem", my: "1rem", width: "95%" }}
        />
      </div>
      <Button
        type="button"
        variant="outlined"
        href="/"
        sx={{ mx: "1rem", my: "1rem" }}
      >
        Back
      </Button>
      <Button type="submit" variant="contained" sx={{ mx: "1rem", my: "1rem" }}>
        Add Note
      </Button>
    </form>
  );
};

export default NewNoteForm;
