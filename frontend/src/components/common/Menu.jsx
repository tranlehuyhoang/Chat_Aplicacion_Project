import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { logout } from '../../slices/authSlice';
const Menu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        console.log('logout')
        dispatch(logout());
        navigate('/login')
    }
    return (
        <div>
            <div className="side-menu flex-lg-column me-lg-1 ms-lg-0">
                {/* LOGO */}
                <div className="navbar-brand-box">
                    <a href="./chat" className="logo logo-dark">
                        <span className="logo-sm">
                            <img src="assets/images/logo.svg" alt="" height={30} />
                        </span>
                    </a>
                    <a href="./chat" className="logo logo-light">
                        <span className="logo-sm">
                            <img src="assets/images/logo.svg" alt="" height={30} />
                        </span>
                    </a>
                </div>
                {/* end navbar-brand-box */}
                {/* Start side-menu nav */}
                <div className="flex-lg-column my-auto">
                    <ul
                        className="nav nav-pills side-menu-nav justify-content-center"
                        role="tablist"
                    >
                        <li
                            className="nav-item"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Profile"
                        >
                            <a
                                className="nav-link"
                                id="pills-user-tab"
                                data-bs-toggle="pill"
                                href="#pills-user"
                                role="tab"
                            >
                                <i className="ri-user-2-line" />
                            </a>
                        </li>
                        <li
                            className="nav-item"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Chats"
                        >
                            <a
                                className="nav-link active"
                                id="pills-chat-tab"
                                data-bs-toggle="pill"
                                href="#pills-chat"
                                role="tab"
                            >
                                <i className="ri-message-3-line" />
                            </a>
                        </li>
                        <li
                            className="nav-item"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Groups"
                        >
                            <a
                                className="nav-link"
                                id="pills-groups-tab"
                                data-bs-toggle="pill"
                                href="#pills-groups"
                                role="tab"
                            >
                                <i className="ri-group-line" />
                            </a>
                        </li>
                        <li
                            className="nav-item"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Contacts"
                        >
                            <a
                                className="nav-link"
                                id="pills-contacts-tab"
                                data-bs-toggle="pill"
                                href="#pills-contacts"
                                role="tab"
                            >
                                <i className="ri-contacts-line" />
                            </a>
                        </li>
                        <li
                            className="nav-item"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Settings"
                        >
                            <a
                                className="nav-link"
                                id="pills-setting-tab"
                                data-bs-toggle="pill"
                                href="#pills-setting"
                                role="tab"
                            >
                                <i className="ri-settings-2-line" />
                            </a>
                        </li>
                        <li className="nav-item dropdown profile-user-dropdown d-inline-block d-lg-none">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <img
                                    src="assets/images/users/avatar-1.jpg"
                                    alt=""
                                    className="profile-user rounded-circle"
                                />
                            </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">
                                    Profile <i className="ri-profile-line float-end text-muted" />
                                </a>
                                <a className="dropdown-item" href="#">
                                    Setting{" "}
                                    <i className="ri-settings-3-line float-end text-muted" />
                                </a>
                                <div className="dropdown-divider" />
                                <button className="dropdown-item" onClick={handleLogout}>
                                    Log out{" "}
                                    <i className="ri-logout-circle-r-line float-end text-muted" />
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* end side-menu nav */}
                <div className="flex-lg-column d-none d-lg-block">
                    <ul className="nav side-menu-nav justify-content-center">
                        <li className="nav-item">
                            <a
                                className="nav-link light-dark-mode"
                                href="#"
                                data-bs-toggle="tooltip"
                                data-bs-trigger="hover"
                                data-bs-placement="right"
                                title="Dark / Light Mode"
                            >
                                <i className="ri-sun-line theme-mode-icon" />
                            </a>
                        </li>
                        <li className="nav-item btn-group dropup profile-user-dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <img
                                    src="assets/images/users/avatar-1.jpg"
                                    alt=""
                                    className="profile-user rounded-circle"
                                />
                            </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">
                                    Profile <i className="ri-profile-line float-end text-muted" />
                                </a>
                                <a className="dropdown-item" href="#">
                                    Setting{" "}
                                    <i className="ri-settings-3-line float-end text-muted" />
                                </a>
                                <div className="dropdown-divider" />
                                <button className="dropdown-item" onClick={handleLogout} >
                                    Log out{" "}
                                    <i className="ri-logout-circle-r-line float-end text-muted" />
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* Side menu user */}
            </div>
        </div>
    )
}

export default Menu
