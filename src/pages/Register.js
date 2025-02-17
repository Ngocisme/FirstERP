import React, { useEffect, useState } from "react";
import LoginStyle from '../assets/styles/Login/Register.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Register = () => {


    return (
        <div className="container-fluid px-0 login-container d-flex justify-content-center align-items-center">
            <div className="login-form-container">
                <div className="d-flex align-items-center justify-content-center form-title pt-4">
                    <h2 className="form-title-header">Đăng ký</h2>
                    <hr />
                </div>
                <Form className="px-4 pt-4">

                    <Form.Group className="mb-3 fs-5 py-2" controlId="formBasicEmail">
                        <Form.Label className="fw-medium">Tên đăng nhập</Form.Label>
                        <Form.Control type="text" placeholder="Nhập tên đăng nhập" className="fs-5" required />
                    </Form.Group>

                    <Form.Group className="mb-3 fs-5 py-2" controlId="formBasicPassword">
                        <Form.Label className="fw-medium">Mật khẩu</Form.Label>
                        <Form.Control type="password" placeholder="Mật khẩu" className="fs-5" required />
                    </Form.Group>

                    <Form.Group className="mb-3 fs-5 py-2" controlId="formBasicPassword">
                        <Form.Label className="fw-medium">Nhập lại mật khẩu</Form.Label>
                        <Form.Control type="password" placeholder="Nhập lại mật khẩu" className="fs-5" required />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100 btn-login-style p-3 fs-5">
                        Đăng ký
                    </Button>

                    {/* {error &&  <div className="alert alert-danger my-3 fs-4 fw-bold">
                        {error}
                    </div>}

                    {success && <div className="alert alert-success my-3 fs-4 fw-bold">
                        {success}
                    </div>} */}

                </Form>
                <div className="d-flex align-items-center justify-content-center form-title pt-5">
                    <p className="form-title-footer fs-5">Bạn cần hỗ trợ?  <a href="#" className="form-title-a">Liên hệ ngay</a>
                    </p>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default Register;