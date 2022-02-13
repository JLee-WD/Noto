import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import TagIcon from "@mui/icons-material/Tag";
import Container from "@mui/material/Container";
import PeopleAltIconOutlined from "@mui/icons-material/PeopleAltOutlined";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import Context from "../context/context";
import LogoutButton from "../components/LogoutButton";

const drawerWidth = 240;

function ResponsiveNav(props) {
  const navigate = useNavigate();
  const { tags, joins, notes, setFilteredNotes, filteredNotes, user } =
    useContext(Context);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const [selectedTagIndex, setSelectedTagIndex] = useState(0);
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);
  const [selectedTag, setSelectedTag] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/landing");
    }
  }, []);

  useEffect(() => {
    if (search.length === 0) {
      setFilteredNotes(filterNotes());
    } else {
      const searchedNotes = filteredNotes.filter((note) =>
        note.title.includes(search)
      );
      setFilteredNotes(searchedNotes);
    }
  }, [search]);

  const handleSearchOnChange = (event) => {
    setSearch(event.target.value);
  };

  const handleTagItemClick = (event, index, tag) => {
    event.preventDefault();
    const newIndex = index + 1;
    setSelectedTagIndex(newIndex);
    setSelectedTag(tag);
  };

  useEffect(() => {
    setFilteredNotes(filterNotes());
  }, [selectedTag]);

  const filterNotes = () => {
    const filteredNoteIds = [];
    const foundNotes = [];
    if (!selectedTag.id) {
      return notes;
    } else {
      joins.forEach((join) => {
        if (join.tag_id === selectedTag.id) {
          if (filteredNoteIds.includes(join.note_id)) {
            return;
          } else {
            filteredNoteIds.push(join.note_id);
          }
        }
      });
      notes.forEach((note) => {
        if (filteredNoteIds.includes(note.id)) {
          foundNotes.push(note);
        }
      });
    }
    return foundNotes;
  };

  const navTags = () => {
    if (tags.length === 0) {
      return;
    } else {
      const nTags = tags.map((tag, index) => (
        <ListItemButton
          key={index}
          selected={selectedTagIndex === index + 1}
          onClick={(event) => handleTagItemClick(event, index, tag)}
        >
          <ListItemText primary={tag.title} />
        </ListItemButton>
      ));
      return nTags;
    }
  };

  const handleGroupItemClick = (event, index) => {
    const newIndex = index + 1;
    setSelectedGroupIndex(newIndex);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navTags = () => {
    if (tags.length === 0) {
      return;
    } else {
      const nTags = tags.map((tag, index) => (
        <ListItemButton
          key={index}
          selected={selectedTagIndex === index + 1}
          onClick={(event) => handleTagItemClick(event, index, tag)}
        >
          <ListItemText primary={tag.title} />
        </ListItemButton>
      ));
      return nTags;
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Box alignItems="center" sx={{ ml: 3 }}>
        <img src="/logo_t.png" width="160" />
      </Box>
      {user ? (
        <Typography align="center" variant="h6" sx={{ mt: 2 }}>
          G'Day {user.first_name}!
        </Typography>
      ) : (
        <></>
      )}
      <Container alignItems="center">
        <TextField
          sx={{ mt: 4 }}
          id="outlined-basic"
          label="Search"
          variant="outlined"
          onChange={handleSearchOnChange}
        />
      </Container>
      <List>
        <Link to="/new" style={{ textDecoration: "none", color: "black" }}>
          <ListItem button>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Add Note"></ListItemText>
          </ListItem>
        </Link>
      </List>
      <Divider />

      <List>
        {/* TAG */}
        <ListItem>
          <ListItemIcon>
            <TagIcon color="primary" fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Tag" />
        </ListItem>
        <ListItemButton
          selected={selectedTagIndex === 0}
          onClick={(event) => handleTagItemClick(event, -1, {})}
        >
          <ListItemText primary="All" />
        </ListItemButton>
        {navTags()}

        {/* GROUP */}
        <ListItem>
          <ListItemIcon>
            <PeopleAltIconOutlined color="primary" fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Group" />
        </ListItem>
        <ListItemButton
          selected={selectedGroupIndex === 0}
          onClick={(event) => handleGroupItemClick(event, -1)}
        >
          <ListItemText primary="All" />
        </ListItemButton>
        {["Group1", "Group2"].map((text, index) => (
          <ListItemButton
            key={index}
            selected={selectedGroupIndex === index + 1}
            onClick={(event) => handleGroupItemClick(event, index)}
          >
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
      <LogoutButton />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}

ResponsiveNav.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveNav;
