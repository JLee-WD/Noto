import React, { useState, useEffect, useContext } from "react";
import Context from "../context/context";
import ResponsiveNav from "../components/ResponsiveNav";
import NotesList from "../components/NotesList";

const NotesIndex = () => {
  // const { notes, setNotes, filteredNotes } = useContext(Context);

  return (
    <ResponsiveNav>
      <NotesList/>
    </ResponsiveNav>
  );
};

export default NotesIndex;
