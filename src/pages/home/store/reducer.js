import { fromJS } from 'immutable';
import { GETHOMEDATA, GETMORELIST, SCROLLTOPSHOW } from './actionType';

const defaultState = fromJS({
    topicDataLists: [],
    listDatas: [],
    articlePage: 1,
    showBackTop: false
});

const getHomeData = (state, action) => {
    return state.merge({
        topicDataLists: fromJS(action.topicDataLists),
        listDatas: fromJS(action.listDatas)
    });
}

const getMoreList = (state, action) => {
    const copyData = state.get('listDatas').toJS();
    const result = copyData.concat(action.value.listDatas);
    return state.merge({
        listDatas: fromJS(result),
        articlePage: action.articlePage
    })
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case GETHOMEDATA:
            return getHomeData(state, action); // 将具体的逻辑处理提到一个方法中，封装代码
        case GETMORELIST:
            return getMoreList(state, action);
        case SCROLLTOPSHOW:
            return state.set('showBackTop', action.value);
        default:
            return state;
    }
}

export default reducer;