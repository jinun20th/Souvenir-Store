import React from 'react';
import "./navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [show, setShow] = useState(false);
    // const [open, setOpen] = useState(false);
    const changeNavbar = () => {
        if (window.scrollY > 0) {
            setShow(true)
        } else {
            setShow(false);
        }
    }

    // const navigate = useNavigate()

    // const handleClick = async (e) => {
    //     e.preventDefault();
    //     dispatch({ type: "LOGOUT" });
    //     toast.success("Đăng xuất thành công");
    //     navigate("/")
    // };

    window.addEventListener('scroll', changeNavbar);


    return (
        <div className={show ? 'header fixed-top active' : 'header fixed-top'}>

            <div className="container">

                <div className="row align-items-center justify-content-between">

                    <Link to="/" className="logo">
                        {/* <img src="/img/logo.png" alt="logo"></img> */}
                    </Link>

                    <div className="nav">
                        <Link to="/products"></Link>
                        <Link to="/search"></Link>
                        <Link to="/cart"></Link>
                        {/* {user ? (
                            <div className="dropdown">
                                <div className="dropdown-toggle" onClick={() => setOpen(!open)}>
                                    <img src="https://t4.ftcdn.net/jpg/04/08/24/43/360_F_408244382_Ex6k7k8XYzTbiXLNJgIL8gssebpLLBZQ.jpg" alt="User img" />
                                </div>
                                {open ? (
                                    <div className="menu">
                                        <Link to="/profile" className="dropdown-item">Tài khoản</Link>
                                        <a href="/#" className="dropdown-item" onClick={handleClick}>Đăng xuất</a>
                                    </div>
                                ) : null}
                            </div>
                        ) : (
                            <Link to="/login" className="login-btn">
                                Đăng nhập
                            </Link>
                        )} */}
                    </div>

                </div>

            </div>
            {/* <ToastContainer /> */}
        </div>
    );
};

export default Navbar;
