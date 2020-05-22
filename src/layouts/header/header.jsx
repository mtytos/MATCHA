import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav className="nav-wraper pink accent-3">
            <div className="container">
                <ul className="hide-on-small-only">
                    <li><Link to={'/home'}>Home</Link></li>
                    <li><a href="#!">Play</a></li>
                    <li><Link to={'/messages'}>Messages</Link></li>
                    <li><a href="#!">Option</a></li>
                    <li className="right"><a href="#!">Logout</a></li>
                </ul>
                <ul className="hide-on-med-and-up">
                    <li><Link to={'/home'}>
                        <i className="material-icons">person</i>
                    </Link></li>
                    <li><a href="#!">
                        <i className="material-icons">whatshot</i>
                    </a></li>
                    <li><Link to={'/messages'}>
                        <i className="material-icons">message</i>
                    </Link></li>
                    <li><a href="#!">
                        <i className="material-icons">settings</i>
                    </a></li>
                    <li className="right"><a href="#!">
                        <i className="material-icons">exit_to_app</i>
                    </a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;