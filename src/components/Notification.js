import React from "react"
import NotificationsIcon from '@mui/icons-material/Notifications';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { IconButton, Popover } from "@mui/material";

const Notification = () => {
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
                        <NotificationsIcon />
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
                                    <ListItemText primary="Notification 1" />
                              </ListItem>
                              <ListItem button>
                                    <ListItemText primary="Notification 2" />
                              </ListItem>
                        </List>
                  </Popover>
            </>
      )
}

export default Notification