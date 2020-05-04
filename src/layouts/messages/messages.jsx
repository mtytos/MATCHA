import React from "react";

const Messages = () => {

    return (
        <div className="container left-align">
            <ul className="collection with-header">
                <li className="collection-header">Dialogs</li>
                <li className="collection-item avatar">
                    <div className="dg-img">
                        <img src="https://24smi.org/public/media/celebrity/2017/12/11/1yughuj5gile-naomi-skott.jpg"
                             alt="cat" className="portcircle"/>
                    </div>
                    {/*<i className="material-icons circle red">person</i>*/}
                    <p className="grey-text">Kristen</p>
                </li>

                <li className="collection-item avatar">
                    <div className="dg-img">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Naomi_Scott.jpg"
                             alt="cat" className="portcircle"/>
                    </div>
                    {/*<i className="material-icons circle red">person</i>*/}
                    <p className="grey-text">Kristen</p>
                </li>

                <li className="collection-item avatar">
                    <div className="dg-img">
                        <img src="https://cdn.sm-news.ru/wp-content/uploads/2019/12/06/wp4455257-1300x675.jpg"
                             alt="cat" className="portcircle"/>
                    </div>
                    {/*<i className="material-icons circle red">person</i>*/}
                    <p className="grey-text">Kristen</p>
                </li>

            </ul>
        </div>
    );
}

export default Messages;