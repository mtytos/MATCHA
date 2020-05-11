import React from "react";

const Dialog = () => {

    return (
        <div className="container">

            <ul className="collection with-header left-align">
                <li className="collection-item avatar">
                    <div className="dg-img">
                        <img src="https://24smi.org/public/media/celebrity/2017/12/11/1yughuj5gile-naomi-skott.jpg"
                                                alt="cat" className="portcircle"/>
                    </div>
                    <p className="grey-text"><b>Kristen</b></p>
                </li>
            </ul>


            <div className="row left-align">
                <div className="col s10 m8 l8 xl8 left opponent-view">
                    <p className="msg-time">15:20</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores quo saepe veniam! </p>
                </div>
            </div>

            <div className="row right-align">
                <div className="col s10 m8 l8 xl8 right user-view">
                    <p className="msg-time">15:44</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ex laborum numquam optio pariatur quasi suscipit ut.</p>
                </div>
            </div>


            <div className="row">
                <form className="col s12 m12 l12 xl12">
                    <div className="row">
                        <div className="input-field col s6 dg-textarea">
                            <i className="material-icons prefix">mode_edit</i>
                            <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
                            <label htmlFor="icon_prefix2">Message</label>
                        </div>
                    </div>
                    <div className="row right">
                        <button className="btn waves-effect waves-light pink accent-3" type="submit" name="action">Send
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default Dialog;