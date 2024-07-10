import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Person4Icon from '@mui/icons-material/Person4';

const Sidebar = () => {


  return (

    <div style={{ width: '200px', background: '#ffffff', height: '100vh', position: 'fixed', top: 0, left: 0, boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px'}}>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader" sx={{ fontWeight: 'bold', fontSize: '20px', textTransform: 'uppercase', paddingTop: '10px' }}>
            vạn kim thành
          </ListSubheader>
        }>
        <ListItem button component={Link} to="/">
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Trang chủ" />
        </ListItem>
        <ListItem button component={Link} to="/manager">
          <ListItemIcon><Person4Icon /></ListItemIcon>
          <ListItemText primary="Giám đốc" />
        </ListItem>
        <ListItem button component={Link} to="/user">
          <ListItemIcon><AccountCircleIcon /></ListItemIcon>
          <ListItemText primary="Sale" />
        </ListItem>
      </List>
    </div>

  );
};

export default Sidebar;