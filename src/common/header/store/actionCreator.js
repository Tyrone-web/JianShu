import axios from 'axios'
import { fromJS } from 'immutable';
import { HANDLEINPUTFOCUS, GETDATALIST, MOUSEENTER, MOUSELEAVE, HANDLECHANGEPAGE } from './actionTypes';


const getDataList = (value) => ({
    type: GETDATALIST,
    value: fromJS(value),
    totalPage: Math.ceil(value.length / 5) //这里可以传多个属性值？
});

export const gethandleInputFocusAction = () => ({
    type: HANDLEINPUTFOCUS
});

export const getMouseEnterAction = () => ({
    type: MOUSEENTER
})

export const getMouseLeaveAction = () => ({
    type: MOUSELEAVE
})

export const getHandleChangePageAction = (value) => ({
    type: HANDLECHANGEPAGE,
    value
})

export const getListAction = () => {
    return (dispatch) => {
        // heaerList.json
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            const action = getDataList(data.data);
            dispatch(action);
        }).then(error => {
            console.log(error);
        })
    }
}