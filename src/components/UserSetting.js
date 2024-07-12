import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { IconButton, Popover } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Logout from "./Logout";

const UserSetting = () => {
      const [anchorEl, setAnchorEl] = React.useState(null);

      const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
      };

      const handleClose = () => {
            setAnchorEl(null);
      };

      const open = Boolean(anchorEl);
      const id = open ? 'simple-popover' : undefined;
      return (
            <>
                  <IconButton onClick={handleClick}>
                        <AccountCircleIcon />
                  </IconButton>
                  <Popover id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'left',
                        }}
                  >
                        <List>
                              <ListItem button>
                                    <ListItemText primary="Để chức vụ" />
                              </ListItem>
                              <Logout />
                        </List>
                  </Popover>
            </>
      )
}

export default UserSetting;