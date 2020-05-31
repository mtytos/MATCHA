import React from "react";

const ButtonUpload = (props) => {

    return (
        <div className="container left someright">
            <button className="btn-large pink accent-3 waves-effect waves-light" type="submit">{props.name}</button>
        </div>
    );
}

export default ButtonUpload;