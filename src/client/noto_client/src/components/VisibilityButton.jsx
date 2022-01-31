import React, {useState} from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { IconButton, Tooltip } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


const VisibilityButton = (props) => {

  const [visible, setVisible] = useState(props.visible);

  return (
    <>
    <Tooltip title="Toggle visibility">
      <IconButton sx={props.sx} onClick={() => setVisible(!visible)}>
        { visible ? <VisibilityIcon /> : <VisibilityOffIcon /> }
      </IconButton>
    </Tooltip>
    </>
  )
}

export default VisibilityButton;