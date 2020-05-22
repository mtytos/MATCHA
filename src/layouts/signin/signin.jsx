import React from "react";
import ButtonForm from "../../components/btn/btn-submit";
import InputForm from "../../components/input/input-form";
import {Link} from "react-router-dom";
import {getUserData} from "../../api/getUserData";

const url = 'http://84.201.166.200:8080/api/v1/signin';
const data = {
    "email": "lexi@gmail.com",
    "password": "123"
};

const Signin = () => {

    return (
        <div className="container left-align">
            <br/><br/>
            <form>
                <div className="row">
                    <div className="col s12 m8 l6 xl6">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">Enter your email and password</span>
                                <InputForm id={"email"} type={"email"} text={"Email"}/>
                                <InputForm id={"password"} type={"password"} text={"Password"}/>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <ButtonForm name={'Sign in'}/>
            </form>
            <br/><br/><br/>
            <p className="someright">if you don't have an account, please, <Link to={'/signup'}> Sign up</Link></p>
        </div>
    );
}

export default Signin;