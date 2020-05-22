export const signin = (id, email, phone, username, age, gender, country, city, max_dist, look_for, min_age, max_age, images) => {
    return {
        type: 'GET_USER_DATA',
        id,
        email,
        phone,
        username,
        age,
        gender,
        country,
        city,
        max_dist,
        look_for,
        min_age,
        max_age,
        images
    }
};

export const removeTodo = (todo) => {
    return {
        type: 'REMOVE_TODO',
        todo
    }
};