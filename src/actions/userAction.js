export const signin = (status, data) => {
    return {
        type: 'GET_USER_DATA',
        status,
        data
    }
};

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
};