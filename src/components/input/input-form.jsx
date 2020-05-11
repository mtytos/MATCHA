import React from "react";

const InputForm = (props) => {

    return (
        <div className="input-field">
            <input id={props.id} type={props.type} name={props.id}/>
            <label htmlFor={props.id}>{props.text}</label>
        </div>
    );
}

export default InputForm;