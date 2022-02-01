import React, { useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { TextField, Button } from "@mui/material";
import VisibilityButton from "../components/VisibilityButton";

const NewNoteForm = () => {
	const initialFormState = {
		title: "",
		description: "",
		code: "",
		public: false
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
				public: formData.public
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
			<NewNoteSuccess />
		}
	};

	const toggleVisibility = () => {
		setFormData({ ...formData, public: !formData.public });
		console.log(formData);
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