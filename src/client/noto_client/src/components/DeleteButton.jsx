import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteButton = ({ onDeleteNote }) => {
  return (
    <>
      <Tooltip title="Delete note">
        <IconButton onClick={onDeleteNote}>
          <DeleteIcon sx={{'&:hover': {color: 'lightcoral'}}} />
        </IconButton>
      </Tooltip>
    </>
  );
};
export default DeleteButton;
