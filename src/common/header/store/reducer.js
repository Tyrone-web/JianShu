import { fromJS } from 'immutable';
import { HANDLEINPUTFOCUS, GETDATALIST, MOUSEENTER, MOUSELEAVE, HANDLECHANGEPAGE } from './actionTypes';


const defaultState = fromJS({
    focused: false,
    dataList: [],
    mouseIn: false,
    page: 0,
    totalPage: 0
});

const reducer = (state = defaultState, action) => {

    switch (action.type) {
        case HANDLEINPUTFOCUS:
            // let newState = JSON.parse(JSON.stringify(state)); //对原来的state需要进行赋值一份,不能直接对state进行操作
            // newState.focused = !newState.focused;
            // console.log(newState.focused);
            // return newState;
            return state.set('focused', !state.get('focused'));
        case GETDATALIST:
            return state.merge({
                dataList: action.value,
                totalPage: action.totalPage
            });
        case MOUSEENTER:
            return state.set('mouseIn', true);
        case MOUSELEAVE:
            return state.set('mouseIn', false);
        case HANDLECHANGEPAGE:
            return state.set('page', action.value);
        default:
            return state;
    }
};

export default reducer;