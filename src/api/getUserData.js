import React, {useContext} from "react";
import {UserContext} from "../context/UserContext";
import {signin} from "../actions/userAction";

export const  GetUserData = async (url, data) => {

    const {dispatch} = useContext(UserContext);

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
        dispatch(signin(
            json.data.id,
            json.data.email,
            json.data.phone,
            json.data.username,
            json.data.age,
            json.data.gender,
            json.data.country,
            json.data.city,
            json.data.max_dist,
            json.data.look_for,
            json.data.min_age,
            json.data.max_age,
            json.data.images
        ));
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

export const  CreateUser = async (url, data) => {
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