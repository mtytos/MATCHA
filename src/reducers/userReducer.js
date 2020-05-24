export const userReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USER_DATA':
            return {
                ...state,
                data: action.data
            }
        // case 'REMOVE_USER':
        //     return state.filter(todo => todo.id !== action.todo.id)
        default:
            return state
    }
}