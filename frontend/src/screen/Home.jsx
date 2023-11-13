import React, { useEffect, useRef, useState } from 'react'

import NavBarUser from '../components/common/NavBarUser.jsx'
import ChatInput from '../components/common/ChatInput.jsx'
import UserProfile from '../components/common/UserProfile.jsx'
import Menu from '../components/common/Menu.jsx'
import User from '../components/common/User.jsx'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import Chat from '../components/common/Chat.jsx'
import { useGetMessageMutation } from '../slices/MessageApi.js'
import { toast } from 'react-toastify'
import { useGetallMutation } from '../slices/UserApi.js'

const Home = () => {
    const divUnderMessages = useRef();
    const { id } = useParams()
    const navigate = useNavigate();
    const [state, setstate] = useState([]);
    const [onlinePeople, setOnlinePeople] = useState({});
    const [offlinePeople, setOfflinePeople] = useState({});
    const [messages, setMessagess] = useState([]);
    const [ws, setWs] = useState(null);
    const [userSelected, setUserSelected] = useState({});
    const redux = useSelector((state) => state);
    const { userInfo } = useSelector((state) => state.auth);
    const [getMessage, isLoading] = useGetMessageMutation();
    const [getall] = useGetallMutation();

    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        }
    }, [userInfo]);

    useEffect(() => {
        const getMess = async () => {
            try {
                const res = await getMessage(id).unwrap();
                setMessagess([...res])
            } catch (err) {

                toast.error(err?.data?.message || err.error);
            }
        }
        if (id) {
            getMess()

        }
    }, [id]);
    useEffect(() => {

        connectToWs();
    }, [userInfo]);

    useEffect(() => {
        const getAllUser = async () => {
            try {
                const res = await getall().unwrap();

                const offlinePeopleArr = res.users.filter(p => p.username !== userInfo.name)
                    .filter(p => !onlinePeople.some(o => o.userId === p._id));
                setOfflinePeople(offlinePeopleArr);
                console.log('offlinePeople', offlinePeople)
            } catch (err) {
                toast.error(err?.data?.message || err.error);
            }
        };

        getAllUser();
    }, [onlinePeople, userInfo]);

    useEffect(() => {
        const div = divUnderMessages.current;
        if (div) {
            div.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }, [messages]);


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
        if ('online' in messageData) {
            showOnlinePeople(messageData.online);
            console.log('onlinePeople', messageData.online)
        } else if ('text' in messageData) {
            if (messageData.sender === id) {
                setstate(prevs => {
                    if (Array.isArray(prevs)) {
                        return [...prevs, id];
                    } else {
                        return [prevs, id];
                    }
                });
                setMessagess(prev => ([...prev, messageData]));

            }
        }
    }

    function sendMessage(ev, file = null) {
        if (!ev) {
            return
        }
        ws.send(JSON.stringify({
            recipient: id,
            text: ev,
            file,
        }));
        setMessagess(prev => ([...prev, {
            text: ev,
            sender: userInfo.id,
            recipient: id,
            _id: Date.now(),
        }]));

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

                <User onlinePeopleExclOurUser={onlinePeople} offlinePeople={offlinePeople} setUserSelected={setUserSelected} />



                {/* end chat-leftsidebar */}
                {/* Start User chat */}
                <div className="user-chat w-100 overflow-hidden">
                    <div className="d-lg-flex">
                        {/* start chat conversation section */}
                        {id && (
                            <div className="w-100 overflow-hidden position-relative">
                                <NavBarUser userSelected={userSelected} />
                                {/* end chat user head */}
                                {/* start chat conversation */}

                                <Chat messages={messages} divUnderMessages={divUnderMessages} />

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
