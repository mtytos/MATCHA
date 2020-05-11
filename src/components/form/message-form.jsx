import React from "react";
import ButtonSend from "../btn/btn-send";

const MessageForm = (props) => {

    return (
        <div className="row">
            <form className="col s12 m12 l12 xl12">
                <div className="row">
                    <div className="input-field col s6 dg-textarea">
                        <i className="material-icons prefix">mode_edit</i>
                        <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
                        <label htmlFor="icon_prefix2">Message</label>
                    </div>
                </div>
                <ButtonSend />
            </form>
        </div>
    );
}

export default MessageForm;