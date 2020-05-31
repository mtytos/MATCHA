import React, {useContext, useState} from "react";
import { Redirect } from "react-router-dom";
import ButtonForm from "../../components/btn/btn-submit";
import InputForm from "../../components/input/input-form";
import {UserContext} from "../../context/UserContext";
import {Link} from "react-router-dom";
import {signinURL} from "../../api/env";
import {signin} from "../../actions/userAction";


const Signin = () => {
    const {dispatch} = useContext(UserContext);
    const [toHome, setToHome] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        let data = {
            "email": e.target.elements.email.value,
            "password": e.target.elements.password.value
        }
        const response = await fetch(signinURL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        dispatch(signin(json.status, json.data));
        console.log('Успех:', json);
        if (json.status === true) {
            setToHome(true);
        }
    }
    return (
        <div className="container left-align">
            <br/><br/>
            <form onSubmit={handleSubmit}>
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
            { toHome ? <Redirect to="/home" /> : null }
        </div>
    );
}

export default Signin;