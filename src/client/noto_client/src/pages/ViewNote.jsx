import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  a11yDark,
  atomDark,
  base16AteliersulphurpoolLight,
  cb,
  coldarkCold,
  coldarkDark,
  coyWithoutShadows,
  darcula,
  dracula,
  duotoneDark,
  duotoneEarth,
  duotoneForest,
  duotoneLight,
  duotoneSea,
  duotoneSpace,
  ghcolors,
  hopscotch,
  materialDark,
  materialLight,
  materialOceanic,
  nord,
  pojoaque,
  shadesOfPurple,
  synthwave84,
  vs,
  vscDarkPlus,
  xonokai,
  coy,
  dark,
  funky,
  okaidia,
  solarizedlight,
  tomorrow,
  twilight,
  prism,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import SelectLanguage from "../components/SelectLanguage";
import SelectTheme from "../components/SelectTheme";
import NumbersButton from "../components/NumbersButton";
import WrapButton from "../components/WrapButton";

const availableThemes = [
  a11yDark,
  atomDark,
  base16AteliersulphurpoolLight,
  cb,
  coldarkCold,
  coldarkDark,
  coyWithoutShadows,
  darcula,
  dracula,
  duotoneDark,
  duotoneEarth,
  duotoneForest,
  duotoneLight,
  duotoneSea,
  duotoneSpace,
  ghcolors,
  hopscotch,
  materialDark,
  materialLight,
  materialOceanic,
  nord,
  pojoaque,
  shadesOfPurple,
  synthwave84,
  vs,
  vscDarkPlus,
  xonokai,
  coy,
  dark,
  funky,
  okaidia,
  solarizedlight,
  tomorrow,
  twilight,
  prism,
];

const ViewNote = () => {
  const initialNoteState = {
    title: "",
    description: "",
    code: "",
    public: "",
  };
  const { noteId } = useParams();
  const [note, setNote] = useState(initialNoteState);
  const [language, setLanguage] = useState("plaintext");
  const [theme, setTheme] = useState(dracula);
  const [lineNumbers, setLineNumbers] = useState(true);
  const [wrapLongLines, setWrapLongLines] = useState(false);
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
    setLineNumbers(!lineNumbers);
    console.log(lineNumbers);
  };

  const toggleWrapLongLines = () => {
    setWrapLongLines(!wrapLongLines);
    console.log(wrapLongLines);
  };

  return (
    <Box>
      <SelectLanguage language={language} setLanguage={setLanguage} />
      <SelectTheme
        availableThemes={availableThemes}
        setTheme={setTheme}
      />
      <NumbersButton toggleLineNumbers={toggleLineNumbers} />
      <WrapButton toggleWrapLongLines={toggleWrapLongLines} />
      <SyntaxHighlighter
        language={language}
        style={theme}
        showLineNumbers={lineNumbers}
        wrapLongLines={wrapLongLines}
      >
        {note.code}
      </SyntaxHighlighter>
    </Box>
  );
};

export default ViewNote;
