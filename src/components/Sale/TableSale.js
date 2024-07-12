import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const TableSale = () => {
      const columns = [
            { field: 'id', headerName: 'ID', width: 70 },
            { field: 'customer', headerName: 'KHÁCH HÀNG', width: 300 },
            { field: 'status', headerName: 'TRẠNG THÁI', width: 300 },
            { field: 'process', headerName: 'ĐỘ HOÀN THIỆN', width: 300 },
      ];

      const rows = [
            { id: 1, customer: 'Nguyễn Văn A', status: 'Đang sản xuất',process: '100%' },
            { id: 2, customer: 'Nguyễn Văn B', status: 'Đang sản xuất',process: '100%' },
            { id: 3, customer: 'Nguyễn Văn C', status: 'Đang sản xuất',process: '100%' },
            { id: 4, customer: 'Nguyễn Văn D', status: 'Đang sản xuất',process: '100%' },
            { id: 5, customer: 'Nguyễn Văn E', status: 'Đang sản xuất',process: '100%' },
            { id: 6, customer: 'Nguyễn Văn F', status: 'Đang sản xuất',process: '100%' },
            { id: 7, customer: 'Nguyễn Văn G', status: 'Đang sản xuất',process: '100%' },
            { id: 7, customer: 'Nguyễn Văn G', status: 'Đang sản xuất',process: '100%' },
            { id: 7, customer: 'Nguyễn Văn G', status: 'Đang sản xuất',process: '100%' },
            { id: 7, customer: 'Nguyễn Văn G', status: 'Đang sản xuất',process: '100%' },
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

export default TableSale