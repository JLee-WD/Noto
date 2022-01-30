import React from "react";

function Note(props) {
  const { title, description, code, visibility } = props;
  return (
    <div>
      <li>Title: {title}</li>
      <li>Description: {description}</li>
      <li>
        Example: <code>{code}</code>
      </li>
    </div>
  );
}

export default Note;
