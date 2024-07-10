import React from "react";
import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <>
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="text-center">
                    <h1 className="display-1 fw-bold">404</h1>
                    <p className="fs-3"> <span className="text-danger">Opps!</span> Không tìm thấy trang.</p>
                    <p className="lead">
                        Trang bạn tìm hiện không tồn tại.
                    </p>
                    <Link to="/" className="btn btn-primary">Về trang chủ</Link>
                </div>
            </div>
        </>
    )
}

export default NotFound;