import React from "react";
import "../../assets/styles/Dashboard/Management.scss"
import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'customer', headerName: 'KHÁCH HÀNG', width: 130 },
    { field: 'facebook', headerName: 'FACEBOOK', width: 130 },
    { field: 'phone', headerName: 'SĐT', width: 130 },
    { field: 'address', headerName: 'ĐỊA CHỈ', width: 130 },
    { field: 'delivery', headerName: 'HÌNH THỨC GIAO HÀNG', width: 130 },
    { field: 'status', headerName: 'TRẠNG THÁI', width: 130 },
];

const rows = [
    { id: 1, customer: 'Nguyễn Văn A', facebook: 'baongoc123123', phone: '0906841348', address: 'N 1 D3, khu dân cư, Tp. Thủ Dầu Một, Bình Dương, Việt Nam', delivery: 'Xe nhà', status: 'Đang sản xuất' },
    { id: 2, customer: 'Nguyễn Văn B', facebook: 'baongoc123123', phone: '0906841348', address: 'N 1 D3, khu dân cư, Tp. Thủ Dầu Một, Bình Dương, Việt Nam', delivery: 'Xe nhà', status: 'Đang sản xuất' },
    { id: 3, customer: 'Nguyễn Văn C', facebook: 'baongoc123123', phone: '0906841348', address: 'N 1 D3, khu dân cư, Tp. Thủ Dầu Một, Bình Dương, Việt Nam', delivery: 'Xe nhà', status: 'Đang sản xuất' },
    { id: 4, customer: 'Nguyễn Văn D', facebook: 'baongoc123123', phone: '0906841348', address: 'N 1 D3, khu dân cư, Tp. Thủ Dầu Một, Bình Dương, Việt Nam', delivery: 'Xe nhà', status: 'Đang sản xuất' },
    { id: 5, customer: 'Nguyễn Văn E', facebook: 'baongoc123123', phone: '0906841348', address: 'N 1 D3, khu dân cư, Tp. Thủ Dầu Một, Bình Dương, Việt Nam', delivery: 'Xe nhà', status: 'Đang sản xuất' },
    { id: 6, customer: 'Nguyễn Văn F', facebook: 'baongoc123123', phone: '0906841348', address: 'N 1 D3, khu dân cư, Tp. Thủ Dầu Một, Bình Dương, Việt Nam', delivery: 'Xe nhà', status: 'Đang sản xuất' },
    { id: 7, customer: 'Nguyễn Văn G', facebook: 'baongoc123123', phone: '0906841348', address: 'N 1 D3, khu dân cư, Tp. Thủ Dầu Một, Bình Dương, Việt Nam', delivery: 'Xe nhà', status: 'Đang sản xuất' },
    { id: 7, customer: 'Nguyễn Văn G', facebook: 'baongoc123123', phone: '0906841348', address: 'N 1 D3, khu dân cư, Tp. Thủ Dầu Một, Bình Dương, Việt Nam', delivery: 'Xe nhà', status: 'Đang sản xuất' },
    { id: 7, customer: 'Nguyễn Văn G', facebook: 'baongoc123123', phone: '0906841348', address: 'N 1 D3, khu dân cư, Tp. Thủ Dầu Một, Bình Dương, Việt Nam', delivery: 'Xe nhà', status: 'Đang sản xuất' },
    { id: 7, customer: 'Nguyễn Văn G', facebook: 'baongoc123123', phone: '0906841348', address: 'N 1 D3, khu dân cư, Tp. Thủ Dầu Một, Bình Dương, Việt Nam', delivery: 'Xe nhà', status: 'Đang sản xuất' },
];

const Management = () => {
    // const role = useSelector((state) => state.auth.role)

    // if(role !== 1) {
    //     alert('Không đủ quyền truy cập, CÚT!!!!!!!')
    //     return <Navigate to="/" />
    // }
    return (
        <>
            <h3 className="my-4">Xin chào <strong>Giám Đốc</strong></h3>

            <Grid container spacing={2}>

                <Grid item xs={12} container spacing={2}>
                    <Grid item xs={3}>
                        <Paper elevation={3}>
                            <Box p={2}>
                                <Typography variant="h4" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                                    Tháng này đã sản xuất
                                </Typography>
                                <hr />
                                <Typography variant="h4" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                                    50 cái
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item xs={9} >
                        <Paper elevation={3} sx={{ height: '100%' }}>
                            <Box p={2} sx={{ display: 'flex', gap: 2 }}>
                            <Box sx={{ flex: 1, backgroundColor: 'primary.main', padding: 2, height: '100%' }}>Box 1</Box>
                            <Box sx={{ flex: 1, backgroundColor: 'secondary.main', padding: 2, height: '100%' }}>Box 2</Box>
                            <Box sx={{ flex: 1, backgroundColor: 'success.main', padding: 2, height: '100%' }}>Box 3</Box>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Paper elevation={3}>
                        <Box p={2}>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Thông tin đơn hàng</Typography>
                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    initialState={{
                                        pagination: {
                                            paginationModel: { page: 0, pageSize: 5 },
                                        },
                                    }}
                                    pageSizeOptions={[5, 10]}
                                    checkboxSelection
                                />
                            </div>
                        </Box>
                    </Paper>

                </Grid>


                <Grid item xs={12}>
                    <Paper elevation={3}>
                        <Box p={2}>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>đơn hàng sản xuất trong tuần</Typography>
                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    initialState={{
                                        pagination: {
                                            paginationModel: { page: 0, pageSize: 5 },
                                        },
                                    }}
                                    pageSizeOptions={[5, 10]}
                                    checkboxSelection
                                />
                            </div>
                        </Box>
                    </Paper>

                </Grid>

                <Grid item xs={12}>
                    <Paper elevation={3}>
                        <Box p={2}>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>đơn hàng sản xuất trong tuần</Typography>
                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    initialState={{
                                        pagination: {
                                            paginationModel: { page: 0, pageSize: 5 },
                                        },
                                    }}
                                    pageSizeOptions={[5, 10]}
                                    checkboxSelection
                                />
                            </div>
                        </Box>
                    </Paper>

                </Grid>
            </Grid>
        </>
    )
}

export default Management;