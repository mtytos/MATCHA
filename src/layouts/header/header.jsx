import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {UserContext} from "../../context/UserContext";
import {logout} from "../../actions/userAction";

const Header = () => {
    const {user} = useContext(UserContext);
    const {dispatch} = useContext(UserContext);

    const exit = () => {
        dispatch(logout());
    }

    return (
        <nav className="nav-wraper pink accent-3">
            <div className="container">
                <ul className="hide-on-small-only">
                    <li><Link to={user.status === true ? '/home' : '/signin'}>Home</Link></li>
                    <li><a href="#!">Play</a></li>
                    <li><Link to={user.status === true ? '/messages' : '/signin'}>Messages</Link></li>
                    <li><a href="#!">Option</a></li>
                    <li className="right"><Link to={'/signin'} onClick={exit}>Logout</Link></li>
                </ul>
                <ul className="hide-on-med-and-up">
                    <li><Link to={user.status === true ? '/home' : '/signin'}>
                        <i className="material-icons">person</i>
                    </Link></li>
                    <li><a href="#!">
                        <i className="material-icons">whatshot</i>
                    </a></li>
                    <li><Link to={user.status === true ? '/messages' : '/signin'}>
                        <i className="material-icons">message</i>
                    </Link></li>
                    <li><a href="#!">
                        <i className="material-icons">settings</i>
                    </a></li>
                    <li className="right"><Link to={'/signin'} onClick={exit}>
                        <i className="material-icons">exit_to_app</i>
                    </Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;