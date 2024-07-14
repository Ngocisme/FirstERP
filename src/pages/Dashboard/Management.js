import React from "react";
import "../../assets/styles/Dashboard/Management.scss"
import { Box, Grid, ListItemIcon, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import HeaderHello from "../../components/HeaderHello";
import TableOrder from "../../components/Manager/TableOrder";
import TableManufactureMonth from "../../components/Manager/TableManufactureMonth";
import DescriptionIcon from '@mui/icons-material/Description';


const Management = () => {

    return (
        <>
            <HeaderHello />

            <Grid container spacing={2}>

                <Grid item xs={12} container spacing={2}>
                    <Grid item xs={3}>
                        <Paper elevation={3} sx={{ height: '100%' }}>
                            <Box p={3}>
                                <Typography variant="h4" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                                    Tháng này đã sản xuất
                                </Typography>
                                <hr />
                                <Typography variant="h3" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                                    50 cái
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item xs={9}>
                        <Paper elevation={3} sx={{ height: '100%' }}>
                            <Typography variant="h3" sx={{ fontWeight: 'bold', textTransform: 'uppercase',padding: '5px' }}>
                                Thông tin sản xuất
                            </Typography>
                            <hr />
                            <Box p={2} sx={{ display: 'flex', gap: 3 }}>
                                <Paper elevation={3}>
                                    <Box sx={{ flex: 1, padding: 2, height: '100%' }}>
                                        <Typography variant="h6" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>kế hoạch sản xuất hôm nay</Typography>
                                        <hr />
                                        <Typography variant="h5" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>24 đơn</Typography>
                                    </Box>
                                </Paper>

                                <Paper elevation={3}>
                                    <Box sx={{ flex: 1, padding: 2, height: '100%' }}>
                                        <Typography variant="h6" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>kế hoạch sản xuất hôm nay</Typography>
                                        <hr />
                                        <Typography variant="h5" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>24 đơn</Typography>
                                    </Box>
                                </Paper>

                                <Paper elevation={3}>
                                    <Box sx={{ flex: 1, padding: 2, height: '100%' }}>
                                        <Typography variant="h6" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>kế hoạch sản xuất hôm nay</Typography>
                                        <hr />
                                        <Typography variant="h5" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>24 đơn</Typography>
                                    </Box>
                                </Paper>

                            </Box>
                        </Paper>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Paper elevation={3}>
                        <Box p={2}>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Thông tin đơn hàng</Typography>
                            <TableOrder />
                        </Box>
                    </Paper>

                </Grid>


                <Grid item xs={12}>
                    <Paper elevation={3}>
                        <Box p={2}>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>đơn hàng sản xuất trong tuần</Typography>
                            <TableManufactureMonth />
                        </Box>
                    </Paper>

                </Grid>

                <Grid item xs={12}>
                    <Paper elevation={3}>
                        <Box p={2}>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>đơn hàng sản xuất trong tuần</Typography>
                            <TableManufactureMonth />
                        </Box>
                    </Paper>

                </Grid>
            </Grid>
        </>
    )
}

export default Management;