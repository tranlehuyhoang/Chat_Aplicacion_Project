import React, { useEffect, useRef, useState } from 'react'

import NavBarUser from '../components/common/NavBarUser.jsx'
import ChatInput from '../components/common/ChatInput.jsx'
import UserProfile from '../components/common/UserProfile.jsx'
import Menu from '../components/common/Menu.jsx'
import User from '../components/common/User.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import Chat from '../components/common/Chat.jsx'
import { useGetMessageMutation } from '../slices/MessageApi.js'
import { toast } from 'react-toastify'
import { setUserStatusRedux } from '../slices/userStatusSlice.js'
import { setUpdateCredentials } from '../slices/authSlice.js'

const Home = () => {
    const divUnderMessages = useRef();
    const dispatch = useDispatch();
    const { id } = useParams()
    const navigate = useNavigate();

    const [state, setstate] = useState([]);
    const [usersStatus, setUsersStatus] = useState({});
    const [messages, setMessagess] = useState([]);
    const [ws, setWs] = useState(null);
    const [userSelected, setUserSelected] = useState({});
    const redux = useSelector((state) => state);

    const { userInfo } = useSelector((state) => state.auth);
    // const { userInfo_id } = useSelector((state) => state.auth.user?._id);
    const [getMessage, isLoading] = useGetMessageMutation();

    if (!userInfo) {
        console.log(null)
        navigate('login')

    }
    useEffect(() => {

        if (!userInfo) {
            navigate('/login')
        }
    }, [userInfo?.user?._id]);


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
        console.log('useEffect home')

        connectToWs();
    }, [userInfo.user._id]);

    useEffect(() => {
        console.log('useEffect home')

        const div = divUnderMessages.current;
        if (div) {
            div.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }, [messages]);


    function connectToWs() {
        if (!userInfo) {
            return
        }

        const ws = new WebSocket('ws://localhost:8000');
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
        ws.send(JSON.stringify({
            cookies: document.cookie,

        }));
        console.log('WebSocket connection opened');
    }

    function showOnlinePeople(peopleArray) {

        setUsersStatus(peopleArray);
    }
    // function handleMessage(ev) {
    //     const messageData = JSON.parse(ev.data);
    //     console.log('mess from server', messageData.usersStatus)
    //     const filteredUsers = messageData.usersStatus.filter(user => user.user._id === redux.auth.userInfo.user._id);
    //     console.log('redux.auth', redux.auth)
    //     if ('usersStatus' in messageData) {
    //         showOnlinePeople(messageData.usersStatus);
    //         dispatch(setUserStatusRedux(messageData.usersStatus));
    //         dispatch(setCredentials({ userInfo: filteredUsers[0] }));
    //         // console.log('filteredUsers', filteredUsers)

    function handleMessage(ev) {
        console.log(ev)
        const messageData = JSON.parse(ev.data);
        // console.log('mess from server', messageData)
        // console.log('filteredUsers', filteredUsers[0].user)
        // console.log('redux.auth', redux.auth.userInfo.user)
        if ('usersStatus' in messageData) {
            const filteredUsers = messageData.usersStatus.filter(user => user.user._id === redux.auth.userInfo.user._id);
            // console.log('usersStatus from server', messageData)

            showOnlinePeople(messageData.usersStatus);
            dispatch(setUserStatusRedux(messageData.usersStatus));
            dispatch(setUpdateCredentials({ user: filteredUsers[0].user }));
        }
        if (messageData.text || messageData.image) {
            console.log('messageData', messageData)
            console.log('mess')
            setMessagess(prev => [...prev, { ...messageData }]);

        }

    }

    function sendMessage(ev, file = null) {

        console.log({
            text: ev,
            sender: userInfo.user,
            recipient: redux.userSelected.userSelected.user,
            _id: Date.now(),
            file: file?.file ? file.file : null,
            filename: file?.filename ? file.filename : null,
            image: file?.image ? file.image : null,
            size: file?.size ? file.size : null,
            createdAt: new Date(Date.now()).toISOString()

        })
        ws.send(JSON.stringify({
            text: ev,
            sender: userInfo,
            recipient: redux.userSelected.userSelected,
            _id: Date.now(),
            file: file?.file ? file.file : null,
            filename: file?.filename ? file.filename : null,
            image: file?.image ? file.image : null,
            size: file?.size ? file.size : null
        }));
        setMessagess(prev => [...prev, {
            text: ev,
            sender: userInfo.user,
            recipient: redux.userSelected.userSelected.user,
            _id: Date.now(),
            file: file?.file ? file.file : null,
            filename: file?.filename ? file.filename : null,
            image: file?.image ? file.image : null,
            size: file?.size ? file.size : null,
            createdAt: new Date(Date.now()).toISOString()
        }]);


    }
    function sendNewAvatar(ev, file = null) {

        ws.send(JSON.stringify({
            avatar: 'avatar',
        }));


    }


    return (
        <>
            {/* App favicon */}
            {/* magnific-popup css */}

            <div className="layout-wrapper d-lg-flex">
                {/* Start left sidebar-menu */}
                <Menu />

                <User usersStatus={usersStatus} setUserSelected={setUserSelected} sendNewAvatar={sendNewAvatar} />



                {/* end chat-leftsidebar */}
                {/* Start User chat */}
                <div className="user-chat w-100 overflow-hidden ">

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
