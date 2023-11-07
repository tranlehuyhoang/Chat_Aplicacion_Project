import React, { useEffect, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';

const UserBar = ({ online, username, userid, onlinePeopleExclOurUser, handleClick, selectedUserId }) => {

    return (
        <>
            <li
                className={selectedUserId === userid ? "active" : ""}
                onClick={() => handleClick(userid)}
            >
                <NavLink
                    to={'/' + userid}
                // onClick={() => {

                //     setSelectedUserId(userid)
                // }}
                >
                    <div className="d-flex">
                        <div className="chat-user-img online align-self-center me-3 ms-0">
                            <img
                                src="assets/images/users/avatar-2.jpg"
                                className="rounded-circle avatar-xs"
                                alt=""
                            />
                            <span className="user-status" />
                        </div>
                        <div className="flex-grow-1 overflow-hidden">
                            <h5 className="text-truncate font-size-15 mb-1">{username}</h5>
                            <p className="chat-user-message text-truncate mb-0">
                                Hey! there I'm available
                            </p>
                        </div>
                        <div className="font-size-11">05 min</div>
                    </div>
                </NavLink>
            </li >
        </>
    );
};

export default UserBar;