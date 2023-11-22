import React from 'react'
import { useParams } from 'react-router'
import Messenger from './content/Messenger.jsx'
import FileMess from './content/FileMess.jsx'
import Image from './content/Image.jsx'
const Chat = ({ messages, divUnderMessages }) => {
    const { id } = useParams()
    return (
        <div className="chat-conversation p-3 p-lg-4" data-simplebar="init">
            <ul className="list-unstyled" style={{ marginBottom: '100px' }}>
                {messages.map((message, index) => {
                    console.log(message);
                    return (
                        <div key={index}>
                            {!message.image && !message.file ? <Messenger message={message} /> : ''}
                            {message.image ? <Image message={message} /> : ''}
                            {message.file ? <FileMess message={message} /> : ''}

                        </div>
                    );
                })}
            </ul>
            <div ref={divUnderMessages}></div>


        </div >
    )
}

export default Chat
