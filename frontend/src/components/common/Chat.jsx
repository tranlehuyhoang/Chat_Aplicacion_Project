import React from 'react'
import { useParams } from 'react-router'

const Chat = ({ messages, divUnderMessages }) => {
    const { id } = useParams()
    return (
        <div className="chat-conversation p-3 p-lg-4" data-simplebar="init">
            <ul className="list-unstyled" style={{ marginBottom: '100px' }}>
                {messages.map((message, index) => (
                    <div key={index}>

                        {message.file && message.recipient !== id &&
                            <li className="">
                                <div className="conversation-list">
                                    <div className="chat-avatar">
                                        <img
                                            src="assets/images/users/avatar-4.jpg"
                                            alt="chatvia"
                                        />
                                    </div>
                                    <div className="user-chat-content">
                                        <div className="ctext-wrap">
                                            <div className="ctext-wrap-content">
                                                <p className="mb-0">Files</p>
                                                <div className="p-2 mb-2 card">
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar-sm me-3 ms-0">
                                                            <div className="avatar-title bg-primary-subtle text-primary rounded font-size-20">
                                                                <i className="ri-file-text-fill" />
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <div className="text-start">
                                                                <h5 className="font-size-14 mb-1">{message.text}</h5>
                                                                <p className="text-muted font-size-13 mb-0">12.5 MB</p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-4">
                                                            <ul className="list-inline mb-0 font-size-20">
                                                                <li className="list-inline-item">
                                                                    {!message.file.name && <a className="text-muted" download={true} href={`http://localhost:5000/${message.file}`}>
                                                                        <i className="ri-download-2-line" />
                                                                    </a>}
                                                                    {message.file.name && <a className="text-muted" download={true} href={message.file.data}>
                                                                        <i className="ri-download-2-line" />
                                                                    </a>}
                                                                </li>
                                                                <li className="list-inline-item dropdown">
                                                                    <a
                                                                        aria-haspopup="true"
                                                                        className="dropdown-toggle text-muted"
                                                                        aria-expanded="false"
                                                                    >
                                                                        <i className="ri-more-fill" />
                                                                    </a>
                                                                    <div
                                                                        tabIndex={-1}
                                                                        role="menu"
                                                                        aria-hidden="true"
                                                                        className="dropdown-menu-end dropdown-menu"
                                                                    >
                                                                        <button
                                                                            tabIndex={0}
                                                                            role="menuitem"
                                                                            className="dropdown-item"
                                                                        >
                                                                            Share{" "}
                                                                            <i className="ri-share-line float-end text-muted" />
                                                                        </button>
                                                                        <button
                                                                            tabIndex={0}
                                                                            role="menuitem"
                                                                            className="dropdown-item"
                                                                        >
                                                                            Delete{" "}
                                                                            <i className="ri-delete-bin-line float-end text-muted" />
                                                                        </button>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="chat-time mb-0">
                                                    <i className="ri-time-line align-middle" />{" "}
                                                    <span className="align-middle">01:30</span>
                                                </p>
                                            </div>
                                            <div className="align-self-start ms-1 dropdown">
                                                <a aria-haspopup="true" className="text-muted" aria-expanded="false">
                                                    <i className="ri-more-2-fill" />
                                                </a>
                                                <div
                                                    tabIndex={-1}
                                                    role="menu"
                                                    aria-hidden="true"
                                                    className="dropdown-menu"
                                                >
                                                    <button tabIndex={0} role="menuitem" className="dropdown-item">
                                                        Copy <i className="ri-file-copy-line float-end text-muted" />
                                                    </button>
                                                    <button tabIndex={0} role="menuitem" className="dropdown-item">
                                                        Save <i className="ri-save-line float-end text-muted" />
                                                    </button>
                                                    <button
                                                        type="button"
                                                        tabIndex={0}
                                                        role="menuitem"
                                                        className="dropdown-item"
                                                    >
                                                        Forward{" "}
                                                        <i className="ri-chat-forward-line float-end text-muted" />
                                                    </button>
                                                    <button
                                                        type="button"
                                                        tabIndex={0}
                                                        role="menuitem"
                                                        className="dropdown-item"
                                                    >
                                                        Delete <i className="ri-delete-bin-line float-end text-muted" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="conversation-name">Patricia Smith</div>
                                    </div>
                                </div>
                            </li>
                        }

                        {message.file && message.recipient == id &&
                            <li className="right">
                                <div className="conversation-list">
                                    <div className="chat-avatar">
                                        <img
                                            src="assets/images/users/avatar-4.jpg"
                                            alt="chatvia"
                                        />
                                    </div>
                                    <div className="user-chat-content">
                                        <div className="ctext-wrap">
                                            <div className="ctext-wrap-content">
                                                <p className="mb-0">Files</p>
                                                <div className="p-2 mb-2 card">
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar-sm me-3 ms-0">
                                                            <div className="avatar-title bg-primary-subtle text-primary rounded font-size-20">
                                                                <i className="ri-file-text-fill" />
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <div className="text-start">
                                                                <h5 className="font-size-14 mb-1">{message.text}</h5>
                                                                <p className="text-muted font-size-13 mb-0">12.5 MB</p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-4">
                                                            <ul className="list-inline mb-0 font-size-20">
                                                                <li className="list-inline-item">
                                                                    {!message.file.name && <a className="text-muted" download={true} href={`http://localhost:5000/${message.file}`}>
                                                                        <i className="ri-download-2-line" />
                                                                    </a>}
                                                                    {message.file.name && <a className="text-muted" download={true} href={message.file.data}>
                                                                        <i className="ri-download-2-line" />
                                                                    </a>}
                                                                </li>
                                                                <li className="list-inline-item dropdown">
                                                                    <a
                                                                        aria-haspopup="true"
                                                                        className="dropdown-toggle text-muted"
                                                                        aria-expanded="false"
                                                                    >
                                                                        <i className="ri-more-fill" />
                                                                    </a>
                                                                    <div
                                                                        tabIndex={-1}
                                                                        role="menu"
                                                                        aria-hidden="true"
                                                                        className="dropdown-menu-end dropdown-menu"
                                                                    >
                                                                        <button
                                                                            tabIndex={0}
                                                                            role="menuitem"
                                                                            className="dropdown-item"
                                                                        >
                                                                            Share{" "}
                                                                            <i className="ri-share-line float-end text-muted" />
                                                                        </button>
                                                                        <button
                                                                            tabIndex={0}
                                                                            role="menuitem"
                                                                            className="dropdown-item"
                                                                        >
                                                                            Delete{" "}
                                                                            <i className="ri-delete-bin-line float-end text-muted" />
                                                                        </button>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="chat-time mb-0">
                                                    <i className="ri-time-line align-middle" />{" "}
                                                    <span className="align-middle">01:30</span>
                                                </p>
                                            </div>
                                            <div className="align-self-start ms-1 dropdown">
                                                <a aria-haspopup="true" className="text-muted" aria-expanded="false">
                                                    <i className="ri-more-2-fill" />
                                                </a>
                                                <div
                                                    tabIndex={-1}
                                                    role="menu"
                                                    aria-hidden="true"
                                                    className="dropdown-menu"
                                                >
                                                    <button tabIndex={0} role="menuitem" className="dropdown-item">
                                                        Copy <i className="ri-file-copy-line float-end text-muted" />
                                                    </button>
                                                    <button tabIndex={0} role="menuitem" className="dropdown-item">
                                                        Save <i className="ri-save-line float-end text-muted" />
                                                    </button>
                                                    <button
                                                        type="button"
                                                        tabIndex={0}
                                                        role="menuitem"
                                                        className="dropdown-item"
                                                    >
                                                        Forward{" "}
                                                        <i className="ri-chat-forward-line float-end text-muted" />
                                                    </button>
                                                    <button
                                                        type="button"
                                                        tabIndex={0}
                                                        role="menuitem"
                                                        className="dropdown-item"
                                                    >
                                                        Delete <i className="ri-delete-bin-line float-end text-muted" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="conversation-name">Patricia Smith</div>
                                    </div>
                                </div>
                            </li>
                        }
                        {!message.file && message.recipient !== id &&
                            <li className="">
                                <div className="conversation-list">
                                    <div className="chat-avatar">
                                        <img
                                            src="assets/images/users/avatar-4.jpg"
                                            alt="chatvia"
                                        />
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
                                            <div className="align-self-start ms-1 dropdown">
                                                <a aria-haspopup="true" className="text-muted" aria-expanded="false">
                                                    <i className="ri-more-2-fill" />
                                                </a>
                                                <div
                                                    tabIndex={-1}
                                                    role="menu"
                                                    aria-hidden="true"
                                                    className="dropdown-menu"
                                                >
                                                    <button tabIndex={0} role="menuitem" className="dropdown-item">
                                                        Copy <i className="ri-file-copy-line float-end text-muted" />
                                                    </button>
                                                    <button tabIndex={0} role="menuitem" className="dropdown-item">
                                                        Save <i className="ri-save-line float-end text-muted" />
                                                    </button>
                                                    <button
                                                        type="button"
                                                        tabIndex={0}
                                                        role="menuitem"
                                                        className="dropdown-item"
                                                    >
                                                        Forward{" "}
                                                        <i className="ri-chat-forward-line float-end text-muted" />
                                                    </button>
                                                    <button
                                                        type="button"
                                                        tabIndex={0}
                                                        role="menuitem"
                                                        className="dropdown-item"
                                                    >
                                                        Delete <i className="ri-delete-bin-line float-end text-muted" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="conversation-name">Patricia Smith</div>
                                    </div>
                                </div>
                            </li>

                        }
                        {!message.file && message.recipient == id &&
                            <li className="right">
                                <div className="conversation-list">
                                    <div className="chat-avatar">
                                        <img
                                            src="assets/images/users/avatar-4.jpg"
                                            alt="chatvia"
                                        />
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
                                            <div className="align-self-start ms-1 dropdown">
                                                <a aria-haspopup="true" className="text-muted" aria-expanded="false">
                                                    <i className="ri-more-2-fill" />
                                                </a>
                                                <div
                                                    tabIndex={-1}
                                                    role="menu"
                                                    aria-hidden="true"
                                                    className="dropdown-menu"
                                                >
                                                    <button tabIndex={0} role="menuitem" className="dropdown-item">
                                                        Copy <i className="ri-file-copy-line float-end text-muted" />
                                                    </button>
                                                    <button tabIndex={0} role="menuitem" className="dropdown-item">
                                                        Save <i className="ri-save-line float-end text-muted" />
                                                    </button>
                                                    <button
                                                        type="button"
                                                        tabIndex={0}
                                                        role="menuitem"
                                                        className="dropdown-item"
                                                    >
                                                        Forward{" "}
                                                        <i className="ri-chat-forward-line float-end text-muted" />
                                                    </button>
                                                    <button
                                                        type="button"
                                                        tabIndex={0}
                                                        role="menuitem"
                                                        className="dropdown-item"
                                                    >
                                                        Delete <i className="ri-delete-bin-line float-end text-muted" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="conversation-name">Patricia Smith</div>
                                    </div>
                                </div>
                            </li>
                        }
                    </div>
                ))}
            </ul>
            <div ref={divUnderMessages}></div>


        </div >
    )
}

export default Chat
