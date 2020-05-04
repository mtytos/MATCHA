import React from "react";

const ButtonForm = (props) => {

    return (
        <div className="container left someright">
            <button className="btn-large pink accent-3 waves-effect waves-light pulse">{props.name}</button>
        </div>
    );
}

export default ButtonForm;