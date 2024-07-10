import React from "react"
import '../assets/styles/Dashboard/Layout.scss'
import { Outlet } from 'react-router-dom';
import Header from "./Header";
import Sidebar from "./SideBar";
import Footer from "./Footer";
import { Box } from "@mui/material";

const Layout = () => {
      return (
            <div className="Layout">
                  <Box sx={{ display: 'flex',flexDirection: 'column', minHeight: '100vh' }}>
                        <Sidebar />
                        <Box sx={{ display: 'flex', flex: 1, ml: '200px', flexDirection: 'column', minHeight: '100vh'}}>
                              <Header />
                              <Box sx={{ flex: 1, paddingLeft: '15px' }}>
                                    <Outlet />
                              </Box>
                              <Footer />
                        </Box>
                  </Box>
            </div>
      )
}

export default Layout