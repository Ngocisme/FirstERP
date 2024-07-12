import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Person4Icon from '@mui/icons-material/Person4';
import ReceiptIcon from '@mui/icons-material/Receipt';
import FactoryIcon from '@mui/icons-material/Factory';
import SettingsIcon from '@mui/icons-material/Settings';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import EngineeringIcon from '@mui/icons-material/Engineering';

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
        <ListItem button component={Link} to="/">
          <ListItemIcon><ReceiptIcon /></ListItemIcon>
          <ListItemText primary="Đơn hàng" />
        </ListItem>
        <ListItem button component={Link} to="/">
          <ListItemIcon><FactoryIcon /></ListItemIcon>
          <ListItemText primary="Sản xuất" />
        </ListItem>
        <ListItem button component={Link} to="/">
          <ListItemIcon><Person4Icon /></ListItemIcon>
          <ListItemText primary="Khách hàng" />
        </ListItem>
        <ListItem button component={Link} to="/">
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Thông tin kỹ thuật" />
        </ListItem>
        <ListItem button component={Link} to="/">
          <ListItemIcon><Inventory2Icon /></ListItemIcon>
          <ListItemText primary="Sản phẩm" />
        </ListItem>
        <ListItem button component={Link} to="/">
          <ListItemIcon><EngineeringIcon /></ListItemIcon>
          <ListItemText primary="Nhân sự" />
        </ListItem>
      </List>
    </div>

  );
};

export default Sidebar;