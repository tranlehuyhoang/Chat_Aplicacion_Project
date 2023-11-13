import React, { useEffect } from 'react'

const NavBarUser = ({ userSelected }) => {
    useEffect(() => {
        console.log('userSelected', userSelected)
    }, []);
    return (

        <div className="p-3 p-lg-4 border-bottom user-chat-topbar">
            <div className="row align-items-center">
                <div className="col-sm-4 col-8">
                    <div className="d-flex align-items-center">
                        <div className="d-block d-lg-none me-2 ms-0">
                            <a
                                href="javascript: void(0);"
                                className="user-chat-remove text-muted font-size-16 p-2"
                            >
                                <i className="ri-arrow-left-s-line" />
                            </a>
                        </div>
                        <div className="me-3 ms-0">
                            <img
                                src="assets/images/users/avatar-4.jpg"
                                className="rounded-circle avatar-xs"
                                alt=""
                            />
                        </div>
                        <div className="flex-grow-1 overflow-hidden">
                            <h5 className="font-size-16 mb-0 text-truncate">
                                <a href="#" className="text-reset user-profile-show">
                                    {userSelected.name}
                                </a>{" "}
                                {userSelected.status ? (
                                    <i className="ri-record-circle-fill font-size-10 text-success d-inline-block ms-1" />
                                ) : (
                                    <i className="ri-record-circle-fill font-size-10 d-inline-block ms-1" />
                                )}
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8 col-4">
                    <ul className="list-inline user-chat-nav text-end mb-0">
                        <li className="list-inline-item">
                            <div className="dropdown">
                                <button
                                    className="btn nav-btn dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <i className="ri-search-line" />
                                </button>
                                <div className="dropdown-menu p-0 dropdown-menu-end dropdown-menu-md">
                                    <div className="search-box p-2">
                                        <input
                                            type="text"
                                            className="form-control bg-light border-0"
                                            placeholder="Search.."
                                        />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                            <button
                                type="button"
                                className="btn nav-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#audiocallModal"
                            >
                                <i className="ri-phone-line" />
                            </button>
                        </li>
                        <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                            <button
                                type="button"
                                className="btn nav-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#videocallModal"
                            >
                                <i className="ri-vidicon-line" />
                            </button>
                        </li>
                        <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                            <button
                                type="button"
                                className="btn nav-btn user-profile-show"
                            >
                                <i className="ri-user-2-line" />
                            </button>
                        </li>
                        <li className="list-inline-item">
                            <div className="dropdown">
                                <button
                                    className="btn nav-btn dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <i className="ri-more-fill" />
                                </button>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a
                                        className="dropdown-item d-block d-lg-none user-profile-show"
                                        href="#"
                                    >
                                        View profile{" "}
                                        <i className="ri-user-2-line float-end text-muted" />
                                    </a>
                                    <a
                                        className="dropdown-item d-block d-lg-none"
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#audiocallModal"
                                    >
                                        Audio{" "}
                                        <i className="ri-phone-line float-end text-muted" />
                                    </a>
                                    <a
                                        className="dropdown-item d-block d-lg-none"
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#videocallModal"
                                    >
                                        Video{" "}
                                        <i className="ri-vidicon-line float-end text-muted" />
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Archive{" "}
                                        <i className="ri-archive-line float-end text-muted" />
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Muted{" "}
                                        <i className="ri-volume-mute-line float-end text-muted" />
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Delete{" "}
                                        <i className="ri-delete-bin-line float-end text-muted" />
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


    )
}

export default NavBarUser
