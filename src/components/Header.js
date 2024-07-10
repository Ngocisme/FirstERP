import React, { useEffect, useState } from "react";
import "../assets/styles/Dashboard/Header.scss";
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Button, Grid } from "@mui/material";
import Notification from "./Notification";
import UserSetting from "./UserSetting";


const Header = () => {

  const [time, setTime] = useState(new Date());

  let day = time.getDate();
  let month = time.getMonth() + 1;
  let year = time.getFullYear();

  useEffect(() => {
    const timerID = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerID);
  }, []);
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', paddingTop: '1.5vw', paddingBottom: '1.1vw', paddingLeft: '1vw' }}>
      <Grid container justifyContent='space-between' alignItems='center'>
        <Grid item xs={6} md={8}>
          <Grid container spacing={2} alignItems='center'>

            <Grid item xs={8}>
              <div className="">
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Tìm kiếm" />
              </div>
            </Grid>

            <Grid item xs={4}>
              <Button variant="contained" sx={{ backgroundColor: '#FFD600', color: 'black' }}>Tìm kiếm</Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6} md={4} container justifyContent='flex-end' spacing={2} sx={{ paddingTop: '1vw' }}>
          <Grid container spacing={2} alignItems='center'>
            <Grid item>
              <Typography variant="" sx={{}}>
                {`Ngày ${day} Tháng ${month} Năm ${year}`}
              </Typography>
            </Grid>

            <Grid item>
              <Typography variant="" sx={{ color: 'red' }}>
                {time.toLocaleTimeString()}
              </Typography>
            </Grid>

            <Grid item>
              <Notification />
            </Grid>

            <Grid item>
              <Typography variant="" sx={{ color: '' }}>
                Tên người sale
              </Typography>
            </Grid>

            <Grid item>
              <UserSetting />
            </Grid>

          </Grid>
        </Grid>

      </Grid>
    </AppBar>
  );
};

export default Header;
