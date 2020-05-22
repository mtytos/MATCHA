export const userReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USER_DATA':
            return [...state, {
                id: action.id,
                email: action.email,
                phone: action.phone,
                username: action.username,
                age: action.age,
                gender: action.gender,
                country: action.country,
                city: action.city,
                max_dist: action.max_dist,
                look_for: action.look_for,
                min_age: action.min_age,
                max_age: action.max_age,
                images: action.images
            }]
        case 'REMOVE_USER':
            return state.filter(todo => todo.id !== action.todo.id)
        default:
            return state
    }
}