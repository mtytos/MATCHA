import React from "react";
import DialogList from "../../components/dialog-item/dialog-list";

const Messages = () => {

    return (
        <div className="container left-align">
            <ul className="collection with-header">
                <li className="collection-header">Dialogs</li>
                <DialogList ava={"https://24smi.org/public/media/celebrity/2017/12/11/1yughuj5gile-naomi-skott.jpg"} name={'Kristen'} newmsg={3} />
                <DialogList ava={"https://placefun.ru/uploads/posts/2020-01/1579244776_00.jpg"} name={'Kristen'} newmsg={66} />
                <DialogList ava={"https://upload.wikimedia.org/wikipedia/commons/a/a5/Naomi_Scott.jpg"} name={'Kristen'} newmsg={12} />
            </ul>
        </div>
    );
}

export default Messages;