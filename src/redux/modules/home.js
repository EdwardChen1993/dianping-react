import {
    get
} from '../../utils/request';
import url from '../../utils/url';
import FETCH_DATA from '../middleware/api';
import {
    schema
} from './entities/products';

export const types = {
    // 获取猜你喜欢请求
    FETCH_LIKES_REQUEST: 'FETCH_LIKES_REQUEST',
    // 获取猜你喜欢请求成功
    FETCH_LIKES_SUCCESS: 'FETCH_LIKES_SUCCESS',
    // 获取猜你喜欢请求失败
    FETCH_LIKES_FAILURE: 'FETCH_LIKES_FAILURE',
}


export const actions = {
    loadLikes: () => {
        return (dispatch, getState) => {
            const endpoint = url.getProductList(0, 10);
            return dispatch(fetchLikes(endpoint));
        }
    },
    // loadLikes: () => {
    //     return (dispatch, getState) => {
    //         dispatch(fetchLikesRequest());
    //         return get(url.getProductList(0, 10)).then(data => {
    //             dispatch(fetchLikesSuccess(data));
    //         }).catch(error => {
    //             dispatch(fetchLikesFailure(error));
    //         });
    //     }
    // }
}

const fetchLikes = (endpoint) => ({
    [FETCH_DATA]: {
        types: [
            types.FETCH_LIKES_REQUEST,
            types.FETCH_LIKES_SUCCESS,
            types.FETCH_LIKES_FAILURE,
        ],
        endpoint,
        schema
    }
})

// const fetchLikesRequest = () => ({
//     type: types.FETCH_LIKES_REQUEST
// })

// const fetchLikesSuccess = (data) => ({
//     type: types.FETCH_LIKES_SUCCESS,
//     data
// })

// const fetchLikesFailure = (error) => ({
//     type: types.FETCH_LIKES_FAILURE,
//     error
// })

const reducer = (state = {}, action) => {
    switch (action.types) {
        case types.FETCH_LIKES_REQUEST:
            return state;
        case types.FETCH_LIKES_SUCCESS:
            return state;
        case types.FETCH_LIKES_FAILURE:
            return state;
        default:
            return state;
    }

}

export default reducer;