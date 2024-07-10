import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import "../../assets/styles/Dashboard/Management.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

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
    const role = useSelector((state) => state.auth.role)

    if(role !== 1) {
        alert('Không đủ quyền truy cập, CÚT!!!!!!!')
        return <Navigate to="/" />
    }
    return (
        <>
            <h3 className="my-4">Xin chào <strong>Giám Đốc</strong></h3>
            <div className="container-fluid">
                <div className="row g-5">

                    {/* Trái */}
                    <div className="col-7">
                        <div className="row">

                            <div className="col-4 ">
                                <div className="container-fluid no-padding br-15 border bg-white h-200">
                                    <h3 className="text-uppercase bg-grey border-bottom br-15-tl fw-bold p-2">Tháng này đã sản xuất</h3>
                                    <h1 className="fw-bold mt-4 ps-15">50</h1>
                                </div>
                            </div>

                            <div className="col-8 bg-white border br-15 h-200">
                                <h3 className="text-uppercase p-2 fw-bold">Thông tin sản xuất</h3>

                                <div className="container-fluid">

                                    <div className="row ">
                                        <div className="col-4 border br-15 mx-2 bg-white p-1 boxShadow">

                                            <h4 className="text-uppercase">Kế hoạch sản xuất hôm nay</h4>
                                            <h3 className="ps-7">24 đơn</h3>
                                        </div>

                                        <div className="col-4 border br-15 mx-2 bg-white p-1 boxShadow">

                                            <h4 className="text-uppercase">Đã sản xuất hôm nay</h4>
                                            <h3 className="ps-7">24 đơn</h3>
                                        </div>

                                        <div className="col-3 border br-15 mx-2 bg-white p-1 boxShadow">

                                            <h4 className="text-uppercase">còn Tồn đọng</h4>
                                            <h3 className="ps-5">24 đơn</h3>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="container-fluid border bg-grey br-15 mt-3">

                                <div className="container-fluid py-3">
                                    <h2>
                                        <FontAwesomeIcon icon={faFile} />
                                        Thông tin đơn hàng
                                    </h2>

                                    <div style={{ height: 400, width: '100%', backgroundColor: 'white', boxShadow: ' rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px', borderRadius: '15px', border: 'none' }}>
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
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* /// Phải */}
                    <div className="col-5 bg-grey border br-15">
                        <div className="row">
                            <div className="container-fluid no-padding ">
                                <div className="d-flex justify-content-between">
                                    <h1>Đơn hàng sản xuất trong tuần</h1>
                                    <input type="date" />
                                </div>
                                <div style={{ width: '100%',height: '100%', backgroundColor: 'white', boxShadow: ' rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px', borderRadius: '15px', border: 'none'}}>
                                    <DataGrid
                                        sx={{ padding: '10px',height: '100%' }}
                                        rows={rows}
                                        columns={columns}
                                        initialState={{
                                            pagination: {
                                                paginationModel: { page: 0, pageSize: 5 },
                                            },
                                        }}
                                        pageSizeOptions={[5, 10]}
                                        checkboxSelection
                                        autoHeight
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="container-fluid no-padding">
                        <div className="d-flex justify-content-between">
                            <h1>Đơn hàng sản xuất trong tuần</h1>
                            <input type="date" />
                        </div>
                        <div className="">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td colspan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Management;