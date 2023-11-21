import React from 'react'
import { useParams } from 'react-router'

const Chat = ({ messages, divUnderMessages }) => {
    const { id } = useParams()
    return (
        <div className="chat-conversation p-3 p-lg-4" data-simplebar="init">
            <ul className="list-unstyled" style={{ marginBottom: '100px' }}>
                {messages.map((message, index) => {
                    console.log(message);
                    return (
                        <div key={index}>
                            <div>{message.text}</div>
                        </div>
                    );
                })}
            </ul>
            <div ref={divUnderMessages}></div>


        </div >
    )
}

export default Chat
