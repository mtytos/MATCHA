import React from "react";
import DialogHead from "../../components/header/dialog-head";
import OpponentMessage from "../../components/message/opponent-message";
import UserMessage from "../../components/message/user-message";
import MessageForm from "../../components/form/message-form";

const Dialog = () => {

    return (
        <div className="container">
            <DialogHead ava={'https://24smi.org/public/media/celebrity/2017/12/11/1yughuj5gile-naomi-skott.jpg'} name={'Kristen'} />
            <OpponentMessage time={'12:43'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores quo saepe veniam!'} />
            <UserMessage time={'12:57'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta exm optio pariatur quasi suscipit ut.'} />
            <MessageForm />
        </div>
    );
}

export default Dialog;