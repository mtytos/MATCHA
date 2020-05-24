import {signupURL} from "./env";

export async function GetUserData (data, url) {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const json = await response.json();
    return JSON.stringify(json);
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