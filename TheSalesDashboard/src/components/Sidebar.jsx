import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function Sidebar() {
  // Drawer width can be adjusted as needed
  const drawerWidth = 240;

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Typography variant="h6" sx={{ my: 2, mx: 'auto' }}>
        Dashboard Menu
      </Typography>
      <List>
        {['Home', 'Profile', 'About'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index === 0 && <HomeIcon />}
              {index === 1 && <AccountBoxIcon />}
              {index === 2 && <InfoIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;