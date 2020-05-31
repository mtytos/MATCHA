export const userReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USER_DATA':
            return {
                ...state,
                status: action.status,
                data: action.data
            }
        case 'LOGOUT':
            return {
                ...state,
                status: false,
                data: null
            }
        default:
            return state
    }
}