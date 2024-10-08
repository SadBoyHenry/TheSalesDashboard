import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

function Heading() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Dashboard
        </Typography>
        <Button color="inherit">Login</Button>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="account of current user"
          sx={{ ml: 2 }}
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Heading;