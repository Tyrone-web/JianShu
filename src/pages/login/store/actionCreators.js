import axios from 'axios';
import { CHANGELOGIN, LOGOUT } from './actionTypes';


const getChangeLogin = (value) => ({
    type: CHANGELOGIN,
    value
})

export const getLoginActionAsync = (account, password) => {
    return (dispatch) => {
        axios.get(`/api/login.json?account=${account}&password=${password}`).then(res => {
            if (res.data.success) {
                const action = getChangeLogin(true);
                dispatch(action);
            } else {
                alert('登录失败');
            }
        })
    }
}

export const getLogoutAction = (value) => ({
    type: LOGOUT,
    value
})