import React from "react";
import WrapTextOutlinedIcon from '@mui/icons-material/WrapTextOutlined';
import { IconButton, Tooltip } from "@mui/material";

const WrapButton = ({ toggleWrapLongLines }) => {
  return (
    <>
      <Tooltip title="Wrap Lines">
        <IconButton
          onClick={toggleWrapLongLines}
          sx={{ "&:hover": { color: "dodgerblue" } }}
        >
          <WrapTextOutlinedIcon />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default WrapButton;
