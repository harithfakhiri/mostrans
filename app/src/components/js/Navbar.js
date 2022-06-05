import React from "react";
import {
  SwipeableDrawer,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import "../css/Navbar.css";

const useStyle = makeStyles({
  list: {
    width: 250,
  },
});

function Navbar() {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className="Navbar">
      <div className="home__menu">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          onClick={() => setIsDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </div>
      <img
        className="home__ram"
        src={require("../../assets/ram.png")}
        alt="rickandmor"
      />
      <SwipeableDrawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <div>
          <Box textAlign="center" p={2}>
            Page Menu
          </Box>
          <Divider />
          <List>
            <ListItem button onClick={() => navigate(`/`)}>
              <ListItemText primary={"Home"} />
            </ListItem>
            <ListItem button onClick={() => navigate(`/charlist`)}>
              <ListItemText primary={"Character list"} />
            </ListItem>
            <ListItem button onClick={() => navigate(`/loclist`)}>
              <ListItemText primary={"List Location"} />
            </ListItem>
            <ListItem button onClick={() => navigate(`/charbyloc`)}>
              <ListItemText primary={"Character by Location"} />
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
}

export default Navbar;
