import { fromJS } from 'immutable';
import { GETDETAILDATA } from './actionType';

const defaultState = fromJS({
    detailData: {
        title: '',
        content: []
    }
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case GETDETAILDATA:
            return state.set('detailData', fromJS(action.value));
        default:
            return state;
    }
}

export default reducer;