import React from "react";

const AvatarCard = (props) => {

    return (
        <div className="col s12 m4 l4 xl4">
            <div className="card">
                <div className="card-image">
                    <img src={props.ava} alt="avatar"/>
                    <a className="btn-floating halfway-fab waves-effect waves-light pink accent-3 pulse"><i
                        className="material-icons">sms</i></a>
                </div>
                <div className="card-content center">
                    <span className="card-title">{props.name}</span>
                    <p>{props.city}, {props.dist} km from you</p>
                </div>
            </div>
        </div>
    );
}

export default AvatarCard;