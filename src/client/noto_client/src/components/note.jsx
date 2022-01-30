import React from "react";

function Notes(props) {
  const { title, description, code, visibility } = props;
  return (
    <div>
      <li>{title}</li>
      <li>{description}</li>
      <li>
        <code>{code}</code>
      </li>
    </div>
  );
}

export default Notes;
