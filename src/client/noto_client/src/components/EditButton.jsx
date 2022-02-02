import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

const EditButton = ( { onEditNote } ) => {
  return (
		<>
			<Tooltip title="Edit note">
				<IconButton onClick={onEditNote}>
        <EditIcon />
				</IconButton>
			</Tooltip>
		</>
	);
};
export default EditButton
