import React from 'react'
import { useParams } from 'react-router'

const FileMess = ({ message }) => {
    const { id } = useParams()

    return (
        <div>
            <li className={message.sender._id !== id ? 'right' : ''}>
                <div className="conversation-list">
                    <div className="chat-avatar">
                        <img src={message.sender.avatar} alt="" />

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
                                                        href="assets/images/small/admin_v1.0.zip"
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
                                    <span className="align-middle">
                                        {new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </span>
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
                                        Copy <i className="ri-file-copy-line float-end text-muted" />
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Save <i className="ri-save-line float-end text-muted" />
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Forward{" "}
                                        <i className="ri-chat-forward-line float-end text-muted" />
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Delete <i className="ri-delete-bin-line float-end text-muted" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="conversation-name">{message.sender.nickname}</div>

                    </div>
                </div>
            </li>

        </div>
    )
}

export default FileMess
