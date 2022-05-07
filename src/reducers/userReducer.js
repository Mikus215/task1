import { GET_USERS } from "../constants/userConstants"; 

const userReducer = (state = [], action) => {
    switch (action.type) {
        case GET_USERS:
            return action.payload
        default:
            return state;
    }
}

export default userReducer