import React, { useState } from 'react'

const ChatInput = ({ sendMessage }) => {

    function sendFile(ev) {
        const file = ev.target.files[0];
        const fileName = file.name;
        const fileSize = file.size;
        const fileExtension = fileName.split('.').pop().toLowerCase();

        const imageExtensions = ['jpg', 'jpeg', 'png', 'gif'];

        if (imageExtensions.includes(fileExtension)) {
            // File is an image
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                sendMessage(
                    null,
                    {


                        file: null,
                        filename: null,
                        image: reader.result,
                        size: fileSize,
                    }
                );
            };
        } else {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                sendMessage(
                    ev.target.files[0].name,
                    {
                        file: reader.result,
                        filename: ev.target.files[0].name,
                        image: null,
                        size: fileSize,
                    }
                );
            };
        }
    }






    const [newMessageText, setNewMessageText] = useState('');
    return (
        <form onSubmit={e => { e.preventDefault(), sendMessage(newMessageText), setNewMessageText('') }}>
            <div className="chat-input-section p-3 p-lg-4 border-top mb-0">
                <div className="row g-0">
                    <div className="col">

                        <input
                            value={newMessageText}
                            onChange={ev => { setNewMessageText(ev.target.value) }}
                            type="text"
                            className="form-control form-control-lg bg-light border-light"
                            placeholder="Enter Message..."
                        />
                    </div>
                    <div className="col-auto">
                        <div className="chat-input-links ms-md-2 me-md-0">
                            <ul className="list-inline mb-0">
                                <li
                                    className="list-inline-item"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="Emoji"
                                >
                                    <button
                                        type="button"
                                        className="btn btn-link text-decoration-none font-size-16 btn-lg waves-effect"
                                    >
                                        <i className="ri-emotion-happy-line" />
                                    </button>
                                </li>
                                <li
                                    className="list-inline-item"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="Attached File"
                                >
                                    <input style={{ display: 'none' }} type="file" onChange={sendFile} name="file" id="fileInput" className="" />
                                    <label
                                        htmlFor="fileInput"
                                        className="btn btn-link text-decoration-none font-size-16 btn-lg waves-effect"
                                    >
                                        <i className="ri-attachment-line" />
                                    </label>
                                </li>
                                <li className="list-inline-item">
                                    <button
                                        type="submit"
                                        className="btn btn-primary font-size-16 btn-lg chat-send waves-effect waves-light"
                                    >
                                        <i className="ri-send-plane-2-fill" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    )
}

export default ChatInput
