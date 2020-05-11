import React from "react";

const OpponentMessage = (props) => {

    return (
        <div className="row left-align">
            <div className="col s10 m8 l8 xl8 left opponent-view">
                <p className="msg-time">{props.time}</p>
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default OpponentMessage;