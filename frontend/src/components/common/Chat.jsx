import React from 'react'

const Chat = ({ messages }) => {
    return (
        <div className="chat-conversation p-3 p-lg-4" data-simplebar="init">
            <ul className="list-unstyled mb-0">
                {messages.map((message, index) => (
                    <li key={index} className={message.isOur ? "right" : ""}>
                        <div className="conversation-list">
                            <div className="chat-avatar">
                                <img src={message.isOur ? "assets/images/users/avatar-1.jpg" : "assets/images/users/avatar-4.jpg"} alt="" />
                            </div>
                            <div className="user-chat-content">
                                <div className="ctext-wrap">
                                    <div className="ctext-wrap-content">
                                        <p className="mb-0">
                                            {message.text}
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
                                <div className="conversation-name">{message.isOur ? "Patricia Smith" : "Doris Brown"}</div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Chat
