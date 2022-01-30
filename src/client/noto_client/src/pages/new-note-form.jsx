const NewNoteForm = () => {
  const onCreateNote = async (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: event.target.noteTitle.value,
        description: event.target.noteDescription.value,
        code: event.target.noteCode.value,
      }),
    };
    const newNoteResponse = await fetch("/api/notes", options);
    const newNotesJson = await newNoteResponse.json();
    console.log("New Note", newNotesJson);
  };

  return (
    <form onSubmit={onCreateNote}>
      <label htmlFor="noteTitle">Title</label>
      <input type="text" name="noteTitle" />
      <label htmlFor="noteDescription">Description</label>
      <textarea name="noteDescription" />
      <label htmlFor="noteCode">Code Example</label>
      <textarea name="noteCode" />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NewNoteForm;
