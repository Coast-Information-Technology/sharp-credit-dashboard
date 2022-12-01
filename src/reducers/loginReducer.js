

export const loginReducer = (state, action) => {

    switch (action.type) {
        case 'LOGIN_USER':
            state = {
                email: action.user.email,
                password: action.user.password
            }
            return state

        default:
            return state
    }
}