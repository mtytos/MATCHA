import React from "react";

const PhotoCard = (props) => {

    return (
        <div className="col s12 m4 l4 xl4">
            <div className="card">
                <div className="card-image">
                    <img src={props.photo} alt="photo"/>
                </div>
            </div>
        </div>
    );
}

export default PhotoCard;