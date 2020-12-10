import axios from 'axios';
import { GETDETAILDATA } from './actionType';

const getDetailDataAction = (value) => ({
    type: GETDETAILDATA,
    value
})

export const getDetailDataActionAsync = (id) => {
    return (dispatch) => {
        axios.get(`/api/detailList.json?id=${id}`).then(res => {
            const detailData = res.data.detailData;
            const action = getDetailDataAction(detailData);
            dispatch(action);
        })
    }
}