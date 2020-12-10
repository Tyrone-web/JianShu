import axios from 'axios';
import { GETHOMEDATA, GETMORELIST, SCROLLTOPSHOW } from './actionType';

const getHomeDataAction = (value) => ({
    type: GETHOMEDATA,
    listDatas: value.listDatas,
    topicDataLists: value.topicDataLists
})

const getMoreListAction = (value, articlePage) => ({
    type: GETMORELIST,
    value,
    articlePage
})

// 使用redux-thunk处理ajax异步请求， 使得action可以不再只是一个对象，还可以是一个函数该函数包含一个dispatch，getState
export const getDataInfoAsyncAction = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then(res => {
            const data = res.data;
            const action = getHomeDataAction(data);
            dispatch(action);
        }).catch(error => {
            console.log(error);
        })
    }
}

export const getMoreListActionAsync = (articlePage) => {
    return (dispatch) => {
        axios.get(`/api/homeList.json?page=${articlePage}`).then(res => {
            const data = res.data;
            const action = getMoreListAction(data, articlePage + 1);
            dispatch(action);
        }).catch(err => {
            console.log(err);
        })
    }
}

export const getToggleTopShowAction = (value) => ({
    type: SCROLLTOPSHOW,
    value
})

