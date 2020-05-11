import React from "react";

const UserMessage = (props) => {

    return (
        <div className="row right-align">
            <div className="col s10 m8 l8 xl8 right user-view">
                <p className="msg-time">{props.time}</p>
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default UserMessage;