import React from "react";
import {Link} from "react-router-dom";

const Messages = () => {

    return (
        <div className="container left-align">
            <ul className="collection with-header">
                <li className="collection-header">Dialogs</li>
                <li className="collection-item avatar">
                    <Link to={'/message'}>
                    <div className="dg-img">
                        <Link to={'/home'}><img src="https://24smi.org/public/media/celebrity/2017/12/11/1yughuj5gile-naomi-skott.jpg"
                             alt="cat" className="portcircle"/></Link>
                    </div>
                    {/*<i className="material-icons circle red">person</i>*/}
                    <p className="grey-text"><span className="new badge pink accent-3">7</span>Kristen</p>
                    </Link>
                </li>

                <li className="collection-item avatar">
                    <Link to={'/message'}>
                        <div className="dg-img">
                            <Link to={'/home'}><img src="https://placefun.ru/uploads/posts/2020-01/1579244776_00.jpg"
                                                    alt="cat" className="portcircle"/></Link>
                        </div>
                        {/*<i className="material-icons circle red">person</i>*/}
                        <p className="grey-text">Kristen</p>
                    </Link>
                </li>

                <li className="collection-item avatar">
                    <Link to={'/message'}>
                        <div className="dg-img">
                            <Link to={'/home'}><img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Naomi_Scott.jpg"
                                                    alt="cat" className="portcircle"/></Link>
                        </div>
                        {/*<i className="material-icons circle red">person</i>*/}
                        <p className="grey-text"><span className="new badge pink accent-3">9</span>Kristen</p>
                    </Link>
                </li>

                <li className="collection-item avatar">
                    <Link to={'/message'}>
                        <div className="dg-img">
                            <Link to={'/home'}><img src="https://biografii.net/wp-content/uploads/2018/09/03_PN2w2wC.jpg"
                                                    alt="cat" className="portcircle"/></Link>
                        </div>
                        {/*<i className="material-icons circle red">person</i>*/}
                        <p className="grey-text">Kristen</p>
                    </Link>
                </li>

                <li className="collection-item avatar">
                    <Link to={'/message'}>
                        <div className="dg-img">
                            <Link to={'/home'}><img src="https://cdn.sm-news.ru/wp-content/uploads/2019/12/06/wp4455257-1300x675.jpg"
                                                    alt="cat" className="portcircle"/></Link>
                        </div>
                        {/*<i className="material-icons circle red">person</i>*/}
                        <p className="grey-text"><span className="new badge pink accent-3">14</span>Kristen</p>
                    </Link>
                </li>

            </ul>
        </div>
    );
}

export default Messages;