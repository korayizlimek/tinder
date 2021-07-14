import React from "react";
import { Link } from "react-router-dom";
import "./Chat.css";

function Chat({ imageUrl, name, message, timestamp }) {
    return (
        <Link to={`/chat/${name}`}>
            <div className="chat">
                <div className="chat-image">
                    <img
                        className="chat-image"
                        src={imageUrl}
                        alt="ProfileImage"
                    />
                </div>
                <div className="chat-details">
                    <p className="chat-details-title">{name}</p>
                    <p className="chat-details-message">{message}</p>
                </div>
                <p className="chat-timestamp">{timestamp}</p>
            </div>
        </Link>
    );
}

export default Chat;
