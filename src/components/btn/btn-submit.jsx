import React from "react";

const ButtonSubmit = (props) => {

    return (
        <div className="container left someright">
            <button className="btn-large pink accent-3 waves-effect waves-light pulse"
                    disabled={props.switcher}>{props.name}</button>
        </div>
    );
}

export default ButtonSubmit;