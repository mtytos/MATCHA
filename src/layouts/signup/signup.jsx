import React from "react";
import ButtonForm from "../../components/btn/btn-submit";
import {CreateUser} from "../../api/userAPI";

const Signup = () => {

    // const url = 'http://84.201.166.200:8080/api/v1/signup';
    // const data = {
    //     "email": "roma@gmail.com",
    //     "phone": "89998887766",
    //     "password": "123",
    //     "username": "Roma",
    //     "age": 20,
    //     "gender": "male",
    //     "country": "Russia",
    //     "city": "Moscow",
    //     "max_dist": 50,
    //     "look_for": "male",
    //     "min_age": 21,
    //     "max_age": 30,
    //     "images":[]
    // };

    return (
        <div className="container left-align">
            <br/><br/>
            <form onSubmit={CreateUser}>
                <div className="row">
                    <div className="col s12 m8 l6 xl6">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">Personal data</span>
                                <div className="input-field">
                                    <input id="username" type="text" name="username"/>
                                    <label htmlFor="username">Name</label>
                                </div>
                                <div className="input-field">
                                    <input id="age" type="number" name="age"/>
                                    <label htmlFor="age">Age</label>
                                </div>
                                <div>
                                    <p>
                                        <label>
                                            <input className="with-gap" name="gender" type="radio" value="male" defaultChecked/>
                                            <span>Male</span>
                                        </label>
                                        <label className="someright">
                                            <input className="with-gap" name="gender" type="radio" value="female"/>
                                            <span>Female</span>
                                        </label>
                                    </p>
                                </div>
                                <div className="input-field">
                                    <input id="country" type="text" name="country"/>
                                    <label htmlFor="country">Country</label>
                                </div>
                                <div className="input-field">
                                    <input id="city" type="text" name="city"/>
                                    <label htmlFor="city">City</label>
                                </div>
                                <div className="input-field">
                                    <input id="phone" type="number" name="phone"/>
                                    <label htmlFor="phone">Phone</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m8 l6 xl6">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">Looking for</span>
                                <br/>
                                <div>
                                    <p>
                                        <label>
                                            <input className="with-gap" name="look_for" type="radio" value="male" defaultChecked/>
                                            <span>Male</span>
                                        </label>
                                        <label className="someright">
                                            <input className="with-gap" name="look_for" type="radio" value="female"/>
                                            <span>Female</span>
                                        </label>
                                    </p>
                                </div>
                                <div className="input-field">
                                    <input id="minAge" type="number" name="min_age"/>
                                    <label htmlFor="minAge">Min age</label>
                                </div>
                                <div className="input-field">
                                    <input id="maxAge" type="number" name="max_age"/>
                                    <label htmlFor="maxAge">Max age</label>
                                </div>
                                <div className="input-field">
                                    <input id="maxDistance" type="number" name="max_dist"/>
                                    <label htmlFor="maxDistance">Max distance, km</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m8 l6 xl6">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">Create account</span>
                                <div className="input-field">
                                    <input id="email" type="email" name="email"/>
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="input-field">
                                    <input id="password" type="password" name="password"/>
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="input-field">
                                    <input id="repassword" type="password" name="repassword"/>
                                    <label htmlFor="repassword">Repeat password</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <p className="someright">*push the button I hereby agree to the Terms of processing of my personal data.</p>
                <ButtonForm name={'Sign up'}/>
            </form>
        </div>
    );
}

export default Signup;