import React from "react";

const Tag = (props) => {

    return (
        <div className="chip">
            {props.tag}
            <i className="close material-icons">close</i>
        </div>
    );
}

export default Tag;