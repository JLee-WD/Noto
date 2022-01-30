const NewNoteForm = ({ onCreateNote }) => {
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
