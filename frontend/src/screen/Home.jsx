import React from 'react'

import NavBarUser from '../components/common/NavBarUser.jsx'
import ChatInput from '../components/common/ChatInput.jsx'
import UserProfile from '../components/common/UserProfile.jsx'

const Home = () => {
    return (
        <div className="user-chat w-100 overflow-hidden">
            <div className="d-lg-flex">
                {/* start chat conversation section */}
                <div className="w-100 overflow-hidden position-relative">
                    <NavBarUser />
                    {/* end chat user head */}
                    {/* start chat conversation */}
                    <div className="chat-conversation p-3 p-lg-4" data-simplebar="init">
                        <ul className="list-unstyled mb-0">
                            <li>
                                <div className="conversation-list">
                                    <div className="chat-avatar">
                                        <img src="assets/images/users/avatar-4.jpg" alt="" />
                                    </div>
                                    <div className="user-chat-content">
                                        <div className="ctext-wrap">
                                            <div className="ctext-wrap-content">
                                                <p className="mb-0">Good morning</p>
                                                <p className="chat-time mb-0">
                                                    <i className="ri-time-line align-middle" />{" "}
                                                    <span className="align-middle">10:00</span>
                                                </p>
                                            </div>
                                            <div className="dropdown align-self-start">
                                                <a
                                                    className="dropdown-toggle"
                                                    href="#"
                                                    role="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    <i className="ri-more-2-fill" />
                                                </a>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="#">
                                                        Copy{" "}
                                                        <i className="ri-file-copy-line float-end text-muted" />
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        Save{" "}
                                                        <i className="ri-save-line float-end text-muted" />
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        Forward{" "}
                                                        <i className="ri-chat-forward-line float-end text-muted" />
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        Delete{" "}
                                                        <i className="ri-delete-bin-line float-end text-muted" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="conversation-name">Doris Brown</div>
                                    </div>
                                </div>
                            </li>
                            <li className="right">
                                <div className="conversation-list">
                                    <div className="chat-avatar">
                                        <img src="assets/images/users/avatar-1.jpg" alt="" />
                                    </div>
                                    <div className="user-chat-content">
                                        <div className="ctext-wrap">
                                            <div className="ctext-wrap-content">
                                                <p className="mb-0">
                                                    Good morning, How are you? What about our next
                                                    meeting?
                                                </p>
                                                <p className="chat-time mb-0">
                                                    <i className="ri-time-line align-middle" />{" "}
                                                    <span className="align-middle">10:02</span>
                                                </p>
                                            </div>
                                            <div className="dropdown align-self-start">
                                                <a
                                                    className="dropdown-toggle"
                                                    href="#"
                                                    role="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    <i className="ri-more-2-fill" />
                                                </a>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="#">
                                                        Copy{" "}
                                                        <i className="ri-file-copy-line float-end text-muted" />
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        Save{" "}
                                                        <i className="ri-save-line float-end text-muted" />
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        Forward{" "}
                                                        <i className="ri-chat-forward-line float-end text-muted" />
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        Delete{" "}
                                                        <i className="ri-delete-bin-line float-end text-muted" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="conversation-name">Patricia Smith</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="chat-day-title">
                                    <span className="title">Today</span>
                                </div>
                            </li>
                            <li>
                                <div className="conversation-list">
                                    <div className="chat-avatar">
                                        <img src="assets/images/users/avatar-4.jpg" alt="" />
                                    </div>
                                    <div className="user-chat-content">
                                        <div className="ctext-wrap">
                                            <div className="ctext-wrap-content">
                                                <p className="mb-0">Yeah everything is fine</p>
                                                <p className="chat-time mb-0">
                                                    <i className="ri-time-line align-middle" />{" "}
                                                    <span className="align-middle">10:05</span>
                                                </p>
                                            </div>
                                            <div className="dropdown align-self-start">
                                                <a
                                                    className="dropdown-toggle"
                                                    href="#"
                                                    role="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    <i className="ri-more-2-fill" />
                                                </a>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="#">
                                                        Copy{" "}
                                                        <i className="ri-file-copy-line float-end text-muted" />
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        Save{" "}
                                                        <i className="ri-save-line float-end text-muted" />
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        Forward{" "}
                                                        <i className="ri-chat-forward-line float-end text-muted" />
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        Delete{" "}
                                                        <i className="ri-delete-bin-line float-end text-muted" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ctext-wrap">
                                            <div className="ctext-wrap-content">
                                                <p className="mb-0">
                                                    &amp; Next meeting tomorrow 10.00AM
                                                </p>
                                                <p className="chat-time mb-0">
                                                    <i className="ri-time-line align-middle" />{" "}
                                                    <span className="align-middle">10:05</span>
                                                </p>
                                            </div>
                                            <div className="dropdown align-self-start">
                                                <a
                                                    className="dropdown-toggle"
                                                    href="#"
                                                    role="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    <i className="ri-more-2-fill" />
                                                </a>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="#">
                                                        Copy{" "}
                                                        <i className="ri-file-copy-line float-end text-muted" />
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        Save{" "}
                                                        <i className="ri-save-line float-end text-muted" />
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        Forward{" "}
                                                        <i className="ri-chat-forward-line float-end text-muted" />
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        Delete{" "}
                                                        <i className="ri-delete-bin-line float-end text-muted" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="conversation-name">Doris Brown</div>
                                    </div>
                                </div>
                            </li>
                            <li className="right">
                                <div className="conversation-list">
                                    <div className="chat-avatar">
                                        <img src="assets/images/users/avatar-1.jpg" alt="" />
                                    </div>
                                    <div className="user-chat-content">
                                        <div className="ctext-wrap">
                                            <div className="ctext-wrap-content">
                                                <p className="mb-0">Wow that's great</p>
                                                <p className="chat-time mb-0">
                                                    <i className="ri-time-line align-middle" />{" "}
                                                    <span className="align-middle">10:06</span>
                                                </p>
                                            </div>
                                            <div className="dropdown align-self-start">
                                                <a
                                                    className="dropdown-toggle"
                                                    href="#"
                                                    role="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    <i className="ri-more-2-fill" />
                                                </a>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="#">
                                                        Copy{" "}
                                                        <i className="ri-file-copy-line float-end text-muted" />
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        Save{" "}
                                                        <i className="ri-save-line float-end text-muted" />
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        Forward{" "}
                                                        <i className="ri-chat-forward-line float-end text-muted" />
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        Delete{" "}
                                                        <i className="ri-delete-bin-line float-end text-muted" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="conversation-name">Patricia Smith</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="conversation-list">
                                    <div className="chat-avatar">
                                        <img src="assets/images/users/avatar-4.jpg" alt="" />
                                    </div>
                                    <div className="user-chat-content">
                                        <div className="ctext-wrap">
                                            <div className="ctext-wrap-content">
                                                <ul className="list-inline message-img  mb-0">
                                                    <li className="list-inline-item message-img-list me-2 ms-0">
                                                        <div>
                                                            <a
                                                                className="popup-img d-inline-block m-1"
                                                                href="/assets/images/small/img-1.jpg"
                                                                title="Project 1"
                                                            >
                                                                <img
                                                                    src="assets/images/small/img-1.jpg"
                                                                    alt=""
                                                                    className="rounded border"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="message-img-link">
                                                            <ul className="list-inline mb-0">
                                                                <li className="list-inline-item">
                                                                    <a
                                                                        download="img-1.jpg"
                                                                        href="/assets/images/small/img-1.jpg"
                                                                        className="fw-medium"
                                                                    >
                                                                        <i className="ri-download-2-line" />
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item dropdown">
                                                                    <a
                                                                        className="dropdown-toggle"
                                                                        href="#"
                                                                        role="button"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-haspopup="true"
                                                                        aria-expanded="false"
                                                                    >
                                                                        <i className="ri-more-fill" />
                                                                    </a>
                                                                    <div className="dropdown-menu">
                                                                        <a className="dropdown-item" href="#">
                                                                            Copy{" "}
                                                                            <i className="ri-file-copy-line float-end text-muted" />
                                                                        </a>
                                                                        <a className="dropdown-item" href="#">
                                                                            Save{" "}
                                                                            <i className="ri-save-line float-end text-muted" />
                                                                        </a>
                                                                        <a className="dropdown-item" href="#">
                                                                            Forward{" "}
                                                                            <i className="ri-chat-forward-line float-end text-muted" />
                                                                        </a>
                                                                        <a className="dropdown-item" href="#">
                                                                            Delete{" "}
                                                                            <i className="ri-delete-bin-line float-end text-muted" />
                                                                        </a>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="list-inline-item message-img-list">
                                                        <div>
                                                            <a
                                                                className="popup-img d-inline-block m-1"
                                                                href="/assets/images/small/img-2.jpg"
                                                                title="Project 2"
                                                            >
                                                                <img
                                                                    src="assets/images/small/img-2.jpg"
                                                                    alt=""
                                                                    className="rounded border"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="message-img-link">
                                                            <ul className="list-inline mb-0">
                                                                <li className="list-inline-item">
                                                                    <a
                                                                        download="img-2.jpg"
                                                                        href="/assets/images/small/img-2.jpg"
                                                                        className="fw-medium"
                                                                    >
                                                                        <i className="ri-download-2-line" />
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item dropdown">
                                                                    <a
                                                                        className="dropdown-toggle"
                                                                        href="#"
                                                                        role="button"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-haspopup="true"
                                                                        aria-expanded="false"
                                                                    >
                                                                        <i className="ri-more-fill" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <a className="dropdown-item" href="#">
                                                                            Copy{" "}
                                                                            <i className="ri-file-copy-line float-end text-muted" />
                                                                        </a>
                                                                        <a className="dropdown-item" href="#">
                                                                            Save{" "}
                                                                            <i className="ri-save-line float-end text-muted" />
                                                                        </a>
                                                                        <a className="dropdown-item" href="#">
                                                                            Forward{" "}
                                                                            <i className="ri-chat-forward-line float-end text-muted" />
                                                                        </a>
                                                                        <a className="dropdown-item" href="#">
                                                                            Delete{" "}
                                                                            <i className="ri-delete-bin-line float-end text-muted" />
                                                                        </a>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <p className="chat-time mb-0">
                                                    <i className="ri-time-line align-middle" />{" "}
                                                    <span className="align-middle">10:09</span>
                                                </p>
                                            </div>
                                            <div className="dropdown align-self-start">
                                                <a
                                                    className="dropdown-toggle"
                                                    href="#"
                                                    role="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    <i className="ri-more-2-fill" />
                                                </a>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="#">
                                                        Copy{" "}
                                                        <i className="ri-file-copy-line float-end text-muted" />
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        Save{" "}
                                                        <i className="ri-save-line float-end text-muted" />
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        Forward{" "}
                                                        <i className="ri-chat-forward-line float-end text-muted" />
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        Delete{" "}
                                                        <i className="ri-delete-bin-line float-end text-muted" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="conversation-name">Doris Brown</div>
                                    </div>
                                </div>
                            </li>
                            <li className="right">
                                <div className="conversation-list">
                                    <div className="chat-avatar">
                                        <img src="assets/images/users/avatar-1.jpg" alt="" />
                                    </div>
                                    <div className="user-chat-content">
                                        <div className="ctext-wrap">
                                            <div className="ctext-wrap-content">
                                                <div className="card p-2 mb-2">
                                                    <div className="d-flex flex-wrap align-items-center attached-file">
                                                        <div className="avatar-sm me-3 ms-0 attached-file-avatar">
                                                            <div className="avatar-title bg-primary-subtle text-primary rounded font-size-20">
                                                                <i className="ri-file-text-fill" />
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <div className="text-start">
                                                                <h5 className="font-size-14 text-truncate mb-1">
                                                                    admin_v1.0.zip
                                                                </h5>
                                                                <p className="text-muted text-truncate font-size-13 mb-0">
                                                                    12.5 MB
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-4 me-0">
                                                            <div className="d-flex gap-2 font-size-20 d-flex align-items-start">
                                                                <div>
                                                                    <a
                                                                        download="admin_v1.0.zip"
                                                                        href="/assets/images/small/admin_v1.0.zip"
                                                                        className="fw-medium"
                                                                    >
                                                                        <i className="ri-download-2-line" />
                                                                    </a>
                                                                </div>
                                                                <div className="dropdown">
                                                                    <a
                                                                        className="dropdown-toggle text-muted"
                                                                        href="#"
                                                                        role="button"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-haspopup="true"
                                                                        aria-expanded="false"
                                                                    >
                                                                        <i className="ri-more-fill" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <a className="dropdown-item" href="#">
                                                                            Share{" "}
                                                                            <i className="ri-share-line float-end text-muted" />
                                                                        </a>
                                                                        <a className="dropdown-item" href="#">
                                                                            Delete{" "}
                                                                            <i className="ri-delete-bin-line float-end text-muted" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="chat-time mb-0">
                                                    <i className="ri-time-line align-middle" />{" "}
                                                    <span className="align-middle">10:16</span>
                                                </p>
                                            </div>
                                            <div className="dropdown align-self-start">
                                                <a
                                                    className="dropdown-toggle"
                                                    href="#"
                                                    role="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    <i className="ri-more-2-fill" />
                                                </a>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="#">
                                                        Copy{" "}
                                                        <i className="ri-file-copy-line float-end text-muted" />
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        Save{" "}
                                                        <i className="ri-save-line float-end text-muted" />
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        Forward{" "}
                                                        <i className="ri-chat-forward-line float-end text-muted" />
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        Delete{" "}
                                                        <i className="ri-delete-bin-line float-end text-muted" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="conversation-name">Patricia Smith</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="conversation-list">
                                    <div className="chat-avatar">
                                        <img src="assets/images/users/avatar-4.jpg" alt="" />
                                    </div>
                                    <div className="user-chat-content">
                                        <div className="ctext-wrap">
                                            <div className="ctext-wrap-content">
                                                <p className="mb-0">
                                                    typing
                                                    <span className="animate-typing">
                                                        <span className="dot" />
                                                        <span className="dot" />
                                                        <span className="dot" />
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="conversation-name">Doris Brown</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* end chat conversation end */}
                    {/* start chat input section */}
                    <ChatInput />
                    {/* end chat input section */}
                </div>
                {/* end chat conversation section */}
                {/* start User profile detail sidebar */}
                <UserProfile />

            </div>
            {/* End User chat */}
            {/* audiocall Modal */}
            <div
                className="modal fade"
                id="audiocallModal"
                tabIndex={-1}
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="text-center p-4">
                                <div className="avatar-lg mx-auto mb-4">
                                    <img
                                        src="assets/images/users/avatar-4.jpg"
                                        alt=""
                                        className="img-thumbnail rounded-circle"
                                    />
                                </div>
                                <h5 className="text-truncate">Doris Brown</h5>
                                <p className="text-muted">Start Audio Call</p>
                                <div className="mt-5">
                                    <ul className="list-inline mb-1">
                                        <li className="list-inline-item px-2 me-2 ms-0">
                                            <button
                                                type="button"
                                                className="btn btn-danger avatar-sm rounded-circle"
                                                data-bs-dismiss="modal"
                                            >
                                                <span className="avatar-title bg-transparent font-size-20">
                                                    <i className="ri-close-fill" />
                                                </span>
                                            </button>
                                        </li>
                                        <li className="list-inline-item px-2">
                                            <button
                                                type="button"
                                                className="btn btn-success avatar-sm rounded-circle"
                                            >
                                                <span className="avatar-title bg-transparent font-size-20">
                                                    <i className="ri-phone-fill" />
                                                </span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* audiocall Modal */}
            {/* videocall Modal */}
            <div
                className="modal fade"
                id="videocallModal"
                tabIndex={-1}
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="text-center p-4">
                                <div className="avatar-lg mx-auto mb-4">
                                    <img
                                        src="assets/images/users/avatar-4.jpg"
                                        alt=""
                                        className="img-thumbnail rounded-circle"
                                    />
                                </div>
                                <h5 className="text-truncate">Doris Brown</h5>
                                <p className="text-muted mb-0">Start Video Call</p>
                                <div className="mt-5">
                                    <ul className="list-inline mb-1">
                                        <li className="list-inline-item px-2 me-2 ms-0">
                                            <button
                                                type="button"
                                                className="btn btn-danger avatar-sm rounded-circle"
                                                data-bs-dismiss="modal"
                                            >
                                                <span className="avatar-title bg-transparent font-size-20">
                                                    <i className="ri-close-fill" />
                                                </span>
                                            </button>
                                        </li>
                                        <li className="list-inline-item px-2">
                                            <button
                                                type="button"
                                                className="btn btn-success avatar-sm rounded-circle"
                                            >
                                                <span className="avatar-title bg-transparent font-size-20">
                                                    <i className="ri-vidicon-fill" />
                                                </span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end modal */}
        </div>
    )
}

export default Home
