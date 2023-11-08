import React, { useEffect, useState } from 'react'

import NavBarUser from '../components/common/NavBarUser.jsx'
import ChatInput from '../components/common/ChatInput.jsx'
import UserProfile from '../components/common/UserProfile.jsx'
import Menu from '../components/common/Menu.jsx'
import User from '../components/common/User.jsx'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import Chat from '../components/common/Chat.jsx'

const Home = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const [onlinePeople, setOnlinePeople] = useState({});
    const [messages, setMessages] = useState([]);
    const [ws, setWs] = useState(null);
    const redux = useSelector((state) => state);
    const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
        console.log('userInfo', userInfo)
        if (!userInfo) {
            navigate('./login')
        }
    }, [userInfo]);

    useEffect(() => {

        connectToWs();
    }, [userInfo]);




    function connectToWs() {
        if (!userInfo) {
            return
        }
        const ws = new WebSocket('ws://localhost:5000');
        setWs(ws);
        ws.addEventListener('open', handleOpen);
        ws.addEventListener('message', handleMessage);
        ws.addEventListener('close', () => {
            setTimeout(() => {
                console.log('Disconnected. Trying to reconnect.');
                connectToWs();
            }, 1000);
        });
    }

    function handleOpen() {
        console.log('WebSocket connection opened');
    }

    function showOnlinePeople(peopleArray) {

        setOnlinePeople(peopleArray);
    }

    function handleMessage(ev) {

        const messageData = JSON.parse(ev.data);
        console.log(messageData)
        if ('online' in messageData) {
            console.log('onlinePeople =>', messageData.online)
            showOnlinePeople(messageData.online);
        } else if ('text' in messageData) {
            if (messageData.sender === id) {
                console.log('id', id, 'messageData', messageData)

                setMessages(prev => [...prev, { ...messageData }]);
                console.log('messages', messages)
            }

        }


    }

    function sendMessage(ev, file = null) {
        console.log(ev)
        ws.send(JSON.stringify({
            recipient: id,
            text: ev,
            file,
        }));

    }


    return (
        <>
            {/* App favicon */}
            {/* magnific-popup css */}
            <link
                href="/assets/libs/magnific-popup/magnific-popup.css"
                rel="stylesheet"
                type="text/css"
            />
            {/* owl.carousel css */}
            <link
                rel="stylesheet"
                href="/assets/libs/owl.carousel/assets/owl.carousel.min.css"
            />
            <link
                rel="stylesheet"
                href="/assets/libs/owl.carousel/assets/owl.theme.default.min.css"
            />
            {/* Bootstrap Css */}
            <link
                href="/assets/css/bootstrap.min.css"
                id="bootstrap-style"
                rel="stylesheet"
                type="text/css"
            />
            {/* Icons Css */}
            <link href="/assets/css/icons.min.css" rel="stylesheet" type="text/css" />
            {/* App Css*/}
            <link
                href="/assets/css/app.min.css"
                id="app-style"
                rel="stylesheet"
                type="text/css"
            />
            <div className="layout-wrapper d-lg-flex">
                {/* Start left sidebar-menu */}
                <Menu />
                {/* end left sidebar-menu */}
                {/* start chat-leftsidebar */}
                <User onlinePeopleExclOurUser={onlinePeople} />
                {/* end chat-leftsidebar */}
                {/* Start User chat */}
                <div className="user-chat w-100 overflow-hidden">
                    <div className="d-lg-flex">
                        {/* start chat conversation section */}
                        {id && (
                            <div className="w-100 overflow-hidden position-relative">
                                <NavBarUser />
                                {/* end chat user head */}
                                {/* start chat conversation */}
                                <Chat />
                                {/* end chat conversation end */}
                                {/* start chat input section */}
                                <ChatInput sendMessage={sendMessage} />
                                {/* end chat input section */}
                            </div>
                        )}

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
                {/* end  layout wrapper */}
                {/* JAVASCRIPT */}
                {/* Magnific Popup*/}
                {/* owl.carousel js */}
                {/* page init */}
            </div>
        </>
    )
}

export default Home
