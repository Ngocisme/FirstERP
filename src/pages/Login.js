import React from "react";
import LoginStyle from '../assets/styles/Login/Login.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { login } from "../redux/Login/AuthSlice";
import { useAppDispatch, useAppNavigate } from "../constants";

const Login = () => {

    const dispatch = useAppDispatch()
    const navigate = useAppNavigate()
    const { loading, error, success, role } = useSelector((state) => state.auth)

    const { register, handleSubmit } = useForm()
    const submitForm = async (data) => {
        const result = await dispatch(login(data))
        if (login.fulfilled.match(result)) {
            if (result.payload.roleId === 1) {
                navigate('/manager')
            } else if (result.payload.roleId === 2) {
                navigate('/user')
            } else {
                console.error('Unauthorized role:', result.payload.roleId);
                alert('Ai cho mày vào đây.');
            }
        }
    }

    return (
        <div className="container-fluid px-0 login-container d-flex justify-content-center align-items-center">
            <div className="login-form-container">
                <div className="d-flex align-items-center justify-content-center form-title pt-4">
                    <h2 className="form-title-header">Đăng nhập</h2>
                    <hr />
                </div>
                <Form className="px-4 pt-4" onSubmit={handleSubmit(submitForm)}>
                    <Form.Group className="mb-3 fs-5 py-2" controlId="formBasicEmail">
                        <Form.Label className="fw-medium">Tên đăng nhập</Form.Label>
                        <Form.Control type="text" placeholder="Nhập tên đăng nhập" className="fs-5" {...register('username', { required: true })} />
                    </Form.Group>

                    <Form.Group className="mb-3 fs-5 py-2" controlId="formBasicPassword">
                        <Form.Label className="fw-medium">Mật khẩu</Form.Label>
                        <Form.Control type="password" placeholder="Mật khẩu" className="fs-5" {...register('password', { required: true })} />
                    </Form.Group>

                    <Form.Group className="mb-3 fs-5 py-2" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Nhớ tài khoản" className="fw-medium" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100 btn-login-style p-3 fs-5" disabled={loading}>
                        {loading ? 'Đang đăng nhập' : 'Đăng nhập'}
                    </Button>

                    {error && <div className="alert alert-danger my-3 fs-4 fw-bold">
                        {error}
                    </div>}

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

export default Login;