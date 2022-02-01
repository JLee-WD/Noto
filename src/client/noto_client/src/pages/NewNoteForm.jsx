import React, { useEffect, useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { TextField, Button } from "@mui/material";
import VisibilityButton from "../components/VisibilityButton";
import { isEmpty } from "lodash";

const NewNoteForm = () => {
  const initialFormState = {
    title: "",
    description: "",
    code: "",
    public: false,
  };

  const [formData, setFormData] = useState(initialFormState);

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
        // public: event.target.public.value
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
      console.log("New Note", newNotesJson);
      setFormData(initialFormState);
    }
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
        <TextField
          name="description"
          label="Description"
          value={formData.description}
          onChange={handleChange}
          variant="outlined"
          sx={{ my: "1rem", mx: "1rem" }}
        />
        <VisibilityButton sx={{ my: "1.5rem" }} visible={formData.public} />
        {/* <FormControlLabel control={<Checkbox onChange={handleChange} value={formData.public} />} label="Public" sx={{ my: '1.5rem' }} /> */}
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
      {/* <Checkbox id="visibility" checked={formData.public} label="Public" onChange={handleChange} value={formData.public} /> */}
      {/* <Checkbox id="visibility" label="Public" /> */}
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
