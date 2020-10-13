import {
    GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_ERROR, 
    DELETE_USERS_REQUEST, DELETE_USERS_SUCCESS, DELETE_USERS_ERROR,
    SAVE_USERS_REQUEST, SAVE_USERS_SUCCESS, SAVE_USERS_ERROR,
    UPDATE_USERS_REQUEST, UPDATE_USERS_SUCCESS, UPDATE_USERS_ERROR,
} from "../constants/adminLoginConstants";
import axios from 'axios';

export const getUsers = () => async (dispatch) => {
    try {
        dispatch({ type: GET_USERS_REQUEST, payload: '' });
        const { data } = await axios.get('http://localhost:3001/users');
        dispatch({ type: GET_USERS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_USERS_ERROR, payload: error })
    }
}

export const saveUsers = (user) => async (dispatch) => {
    try {
        dispatch({ type: SAVE_USERS_REQUEST, payload: user });
        const { data } = await axios.post('http://localhost:3001/users', user,
            { headers: { 'Content-Type': 'multipart/form-data' } });
        dispatch({ type: SAVE_USERS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: SAVE_USERS_ERROR, payload: error })
    }
}

export const updateUsers = (id, user) => async (dispatch) => {
    try {
        dispatch({type: UPDATE_USERS_REQUEST, payload: id});
        const { data } = axios.put('http://localhost:3001/users/' + id, user);
        dispatch({type: UPDATE_USERS_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: UPDATE_USERS_ERROR, payload: error})
    }
}

export const deleteUsers = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_USERS_REQUEST, payload: id });
        const { data } = await axios.delete('http://localhost:3001/users/' + id);
        dispatch({ type: DELETE_USERS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: DELETE_USERS_ERROR, payload: error })
    }
}