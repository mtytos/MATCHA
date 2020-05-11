import React from "react";

const ButtonSend = (props) => {

    return (
        <div className="row right">
            <button className="btn waves-effect waves-light pink accent-3" type="submit" name="action">Send
                <i className="material-icons right">send</i>
            </button>
        </div>
    );
}

export default ButtonSend;