import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const TableManufactureMonth = () => {
      const columns = [
            { field: 'id', headerName: 'ID', width: 70 },
            { field: 'customer', headerName: 'KHÁCH HÀNG', width: 130 },
            { field: 'facebook', headerName: 'FACEBOOK', width: 130 },
            { field: 'phone', headerName: 'SĐT', width: 130 },
            { field: 'address', headerName: 'ĐỊA CHỈ', width: 500 },
        ];
        
        const rows = [
            { id: 1, customer: 'Nguyễn Văn A', facebook: 'baongoc123123', phone: '0906841348', address: 'N 1 D3, khu dân cư, Tp. Thủ Dầu Một, Bình Dương, Việt Nam' },
            { id: 2, customer: 'Nguyễn Văn B', facebook: 'baongoc123123', phone: '0906841348', address: 'N 1 D3, khu dân cư, Tp. Thủ Dầu Một, Bình Dương, Việt Nam' },
            { id: 3, customer: 'Nguyễn Văn C', facebook: 'baongoc123123', phone: '0906841348', address: 'N 1 D3, khu dân cư, Tp. Thủ Dầu Một, Bình Dương, Việt Nam' },
            { id: 4, customer: 'Nguyễn Văn D', facebook: 'baongoc123123', phone: '0906841348', address: 'N 1 D3, khu dân cư, Tp. Thủ Dầu Một, Bình Dương, Việt Nam' },
            { id: 5, customer: 'Nguyễn Văn E', facebook: 'baongoc123123', phone: '0906841348', address: 'N 1 D3, khu dân cư, Tp. Thủ Dầu Một, Bình Dương, Việt Nam' },
            { id: 6, customer: 'Nguyễn Văn F', facebook: 'baongoc123123', phone: '0906841348', address: 'N 1 D3, khu dân cư, Tp. Thủ Dầu Một, Bình Dương, Việt Nam' },
            { id: 7, customer: 'Nguyễn Văn G', facebook: 'baongoc123123', phone: '0906841348', address: 'N 1 D3, khu dân cư, Tp. Thủ Dầu Một, Bình Dương, Việt Nam' },
            { id: 7, customer: 'Nguyễn Văn G', facebook: 'baongoc123123', phone: '0906841348', address: 'N 1 D3, khu dân cư, Tp. Thủ Dầu Một, Bình Dương, Việt Nam' },
            { id: 7, customer: 'Nguyễn Văn G', facebook: 'baongoc123123', phone: '0906841348', address: 'N 1 D3, khu dân cư, Tp. Thủ Dầu Một, Bình Dương, Việt Nam' },
            { id: 7, customer: 'Nguyễn Văn G', facebook: 'baongoc123123', phone: '0906841348', address: 'N 1 D3, khu dân cư, Tp. Thủ Dầu Một, Bình Dương, Việt Nam' },
        ];

      return (
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
      )
}

export default TableManufactureMonth