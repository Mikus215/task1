import { GET_USERS } from "../constants/userConstants";
import { getUsers } from "../api";

export const fetchUser = () => async (dispatch) => {
    const { data } = await getUsers();

    try {
        dispatch({
            type: GET_USERS,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}