import React from 'react'
import { useParams } from 'react-router'

const Image = ({ message }) => {
    // console.log('message', message)
    const { id } = useParams()
    var message_img_sender = message.image

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
                                <ul className="list-inline message-img  mb-0">
                                    <li className="list-inline-item message-img-list">
                                        <div>
                                            <a
                                                className="popup-img d-inline-block m-1"
                                                href={message_img_sender}
                                                title="Project 2"
                                            >
                                                <img
                                                    src={message_img_sender}
                                                    alt=""
                                                    className="rounded border"
                                                />
                                            </a>
                                        </div>
                                        <div className="message-img-link">
                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item">
                                                    <a
                                                        download
                                                        href={message_img_sender.startsWith("data:") ? message_img_sender : `http://localhost:8000/${message.image}`}
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
                                                            Copy <i className="ri-file-copy-line float-end text-muted" />
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Save <i className="ri-save-line float-end text-muted" />
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Forward <i className="ri-chat-forward-line float-end text-muted" />
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Delete <i className="ri-delete-bin-line float-end text-muted" />
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
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
                                        Forward <i className="ri-chat-forward-line float-end text-muted" />
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
    );
}

export default Image
