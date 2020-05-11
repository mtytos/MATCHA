import React from "react";

const DialogHead = (props) => {

    return (
        <ul className="collection with-header left-align">
            <li className="collection-item avatar">
                <div className="dg-img">
                    <img src={props.ava}
                         alt="cat" className="portcircle"/>
                </div>
                <p className="grey-text"><b>{props.name}</b></p>
            </li>
        </ul>
    );
}

export default DialogHead;