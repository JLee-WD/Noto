import React from "react";
import { Link } from "react-router-dom";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';


const EditButton = ( { noteId } ) => {
  return (
		<>
			<Link to={`/edit/${noteId}`}>
				<Tooltip title="Edit note">
					<IconButton>
					<EditIcon />
					</IconButton>
				</Tooltip>
			</Link>
		</>
	);
};
export default EditButton;