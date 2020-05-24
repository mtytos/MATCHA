export const signin = (data) => {
    return {
        type: 'GET_USER_DATA',
        data
    }
};

export const removeTodo = (todo) => {
    return {
        type: 'REMOVE_TODO',
        todo
    }
};