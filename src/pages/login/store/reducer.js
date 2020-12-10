import { fromJS } from 'immutable';
import { LOGOUT, CHANGELOGIN } from './actionTypes';

const defaultState = fromJS({
    login: false
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGOUT:
            return state.set('login', action.value);
        case CHANGELOGIN:
            return state.set('login', action.value);
        default:
            return state;
    }
}

export default reducer;