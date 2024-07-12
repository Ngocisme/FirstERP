import React, { useEffect } from "react";
import LoginStyle from '../assets/styles/Login/Login.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/reducers/userReducer";
import { LOCAL_STORAGE, ROLE } from "../utils/constanst/constanst";
import { validatePassword } from "../utils/function/helperFunc";

const Login = (props) => {

    const { data } = useSelector(
        (state) => state.userReducer.userLogin
    );

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [formLogin, setFormLogin] = React.useState({
        username: "",
        password: "",
        remember: false
    })

    const handleOnChange = (e) => {
        setFormLogin({
            ...formLogin,
            [e.target.id]: e.target.value
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log(formLogin)
        if (formLogin.username.length < 3 || !validatePassword(formLogin.password))
            return;
        else {
            dispatch(loginAction(formLogin));
        }
    }

    useEffect(() => {
        if (data && localStorage.getItem(LOCAL_STORAGE.TOKEN)) {
            switch (JSON.parse(localStorage.getItem(LOCAL_STORAGE.USER))?.role_id) {
                case ROLE.DIRECTOR:
                    navigate("/manager");
                    break;
                case ROLE.MANAGER:
                    navigate(`/user`);
                    break;
                case ROLE.SALE:
                    navigate("/sale");
                    break;
                default:
                    break;
            }
            switch (data.role?.id) {
                case ROLE.DIRECTOR:
                    navigate("/manager");
                    break;
                case ROLE.MANAGER:
                    navigate(`/user`);
                    break;
                case ROLE.SALE:
                    navigate("/sale");
                    break;
                default:
                    break;
            }
        }
    }, [data]);

    return (
        <div className="container-fluid px-0 login-container d-flex justify-content-center align-items-center">
            <div className="login-form-container">
                <div className="d-flex align-items-center justify-content-center form-title pt-4">
                    <h2 className="form-title-header">Đăng nhập</h2>
                    <hr />
                </div>
                <Form className="px-4 pt-4" onSubmit={handleOnSubmit}>
                    <Form.Group className="mb-3 fs-5 py-2" controlId="formBasicEmail">
                        <Form.Label className="fw-medium">Tên đăng nhập</Form.Label>
                        <Form.Control type="text" placeholder="Nhập tên đăng nhập" className="fs-5" onChange={handleOnChange} name="username" controlid="username" />
                    </Form.Group>

                    <Form.Group className="mb-3 fs-5 py-2" controlId="formBasicPassword">
                        <Form.Label className="fw-medium">Mật khẩu</Form.Label>
                        <Form.Control type="password" placeholder="Mật khẩu" className="fs-5" onChange={handleOnChange} name="password" controlid="password" />
                    </Form.Group>

                    <Form.Group className="mb-3 fs-5 py-2" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Nhớ tài khoản" className="fw-medium" onChange={(e) => {
                            console.log(e.target.checked)
                            setFormLogin({
                                ...formLogin,
                                remember: e.target.checked
                            })
                        }} />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100 btn-login-style p-3 fs-5" >
                        đăng nhập
                    </Button>
                    <small className="text-danger">
                        {formLogin.username && formLogin.username.length < 3
                            ? "Username must be at least 6 characters"
                            : ""}
                    </small>
                    <small className="text-danger">
                        {formLogin.password && !validatePassword(formLogin.password)
                            ? "Password must be at least 8 characters"
                            : ""}
                    </small>
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