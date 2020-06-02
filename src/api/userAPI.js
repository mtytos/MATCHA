import {newDataURL, signinURL, signupURL} from "./env";
import {signin} from "../actions/userAction";
import {useContext, useState} from "react";
import {UserContext} from "../context/UserContext";

export const Login = async () => {
    const {user, dispatch} = useContext(UserContext);

    let data = {
        "email": user.data.email,
        "password": user.data.email
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
}

export const RefreshData = async (url = newDataURL) => {
    const {user} = useContext(UserContext);
    const response = await fetch(url + user.data.id, {
        method: 'GET'
    });
    const json = await response.json();
    console.log('Успех:', json);
}

export const CreateUser = async (e, url = signupURL) => {
    e.preventDefault();
    let data = {
        "username": e.target.elements.username.value,
        "age": parseInt(e.target.elements.age.value),
        "gender": e.target.elements.gender.value,
        "country": e.target.elements.country.value,
        "city": e.target.elements.city.value,
        "phone": e.target.elements.phone.value,

        "look_for": e.target.elements.look_for.value,
        "min_age": parseInt(e.target.elements.min_age.value),
        "max_age": parseInt(e.target.elements.max_age.value),
        "max_dist": parseInt(e.target.elements.max_dist.value),

        "email": e.target.elements.email.value,
        "password": e.target.elements.password.value
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        console.log('Успех:', JSON.stringify(json));
    } catch (error) {
        console.error('Ошибка:', error);
    }
}