import React from "react";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import { IconButton, Tooltip } from "@mui/material";

const NumbersButton = ({ toggleLineNumbers }) => {
  return (
    <>
      <Tooltip title="Toggle Line Numbers">
        <IconButton
          onClick={setLineNumbers(!lineNumbers)}
          sx={{ "&:hover": { color: "dodgerblue" } }}
        >
          <FormatListNumberedIcon />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default NumbersButton;
