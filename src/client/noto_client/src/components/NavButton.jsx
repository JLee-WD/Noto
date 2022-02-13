import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavButton = (props) => {
  const { path, text, variant, size } = props;
  const navigate = useNavigate();
  return (
    <Button
      variant={variant}
      onClick={() => {
        navigate(path);
      }}
      sx={{ mx: "1rem", my: "1rem" }}
      size={size}
    >
      {text}
    </Button>
  );
};

export default NavButton;
