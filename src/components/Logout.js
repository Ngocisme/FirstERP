import { logout } from "../redux/Login/AuthSlice";
import { useAppDispatch, useAppNavigate } from "../constants";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Logout = () => {
      const dispatch = useAppDispatch()
      const navigate = useAppNavigate()

      const handleLogout = () => {
            dispatch(logout())
            navigate('/login')
      }

      return (
            <ListItem button>
                  < ListItemText primary = "Đăng xuất" onClick = { handleLogout } />
             </ListItem >
      )
}

export default Logout;