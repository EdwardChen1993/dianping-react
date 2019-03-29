import {
    combineReducers
} from 'redux';
import entities from './entities';
import app from './app';
import home from './home';
import detail from './detail';

// 合并成根reducer
const rootReducer = combineReducers({
    entities,
    app,
    home,
    detail
});

export default rootReducer;