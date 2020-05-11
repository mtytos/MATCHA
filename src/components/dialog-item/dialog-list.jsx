import React from "react";
import {Link} from "react-router-dom";

const DialogList = (props) => {

    return (
        <li className="collection-item avatar">
            <div className="dg-img">
                <Link to={'/home'}><img src={props.ava} alt="avatar" className="portcircle"/></Link>
            </div>
            <Link to={'/dialog'}>
                <p className="grey-text"><span className="new badge pink accent-3">{props.newmsg}</span>{props.name}</p>
            </Link>
        </li>
    );
}

export default DialogList;