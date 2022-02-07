import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import SelectLanguage from "../components/SelectLanguage";
import NumbersButton from "../components/NumbersButton"

import Box from "@mui/material/Box";

const ViewNote = () => {
  const initialNoteState = {
    title: "",
    description: "",
    code: "",
    public: "",
  };
  const { noteId } = useParams();
  const [note, setNote] = useState(initialNoteState);
  const [theme, setTheme] = useState([]);
  const [language, setLanguage] = useState("plaintext");
  const [lineNumbers, setLineNumbers] = useState(true);
  const [wrapLines, toggleWrapLines] = useState(true);
  const [wrapLongLines, toggleWrapLongLines] = useState(false);

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

  const toggleLineNumbers = () => {
    setLineNumbers(!lineNumbers)
    console.log(lineNumbers)
  }

  return (
    <Box>
      <SelectLanguage
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
      />
      <NumbersButton toggleLineNumbers={toggleLineNumbers}/>
      <SyntaxHighlighter
        language={language}
        style={dracula}
        showLineNumbers={lineNumbers}
        wrapLines={wrapLines}
        wrapLongLines={wrapLongLines}
      >
        {note.code}
      </SyntaxHighlighter>
    </Box>
  );
};

export default ViewNote;
