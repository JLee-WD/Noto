import { useEffect, useContext } from "react";
import ResponsiveNav from "../components/ResponsiveNav";
import NotesList from "../components/NotesList";
import { useNavigate } from "react-router-dom";
import Context from "../context/context";

const NotesIndex = () => {
  const navigate = useNavigate();
  const { jwt, setNotes, user, notes, resetNotes } = useContext(Context);

  useEffect(async () => {
    if (!user) {
      navigate("/landing");
    } else {
      await loadNotes(jwt, user.id);
    }
  }, []);

  const loadNotes = async () => {
    const newNotes = await resetNotes();
    setNotes(newNotes);
  };

  return (
    <ResponsiveNav>
      <NotesList />
    </ResponsiveNav>
  );
};

export default NotesIndex;
