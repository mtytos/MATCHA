import React from "react";

const Footer = () => {
    return (
        <footer className="page-footer grey darken-4">
            <div className="container left-align">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Matcha</h5>
                        <p className="grey-text text-lighten-4">School 21 - social network project</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Autors</h5>
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="https://github.com/mtytos">Mtytos</a></li>
                            <li><a className="grey-text text-lighten-3" href="https://github.com/NmadeleiDev">Nmadelei</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright grey darken-4 someright">
                <div className="container left-align">© 2020 Copyright</div>
            </div>
        </footer>
    );
}

export default Footer;