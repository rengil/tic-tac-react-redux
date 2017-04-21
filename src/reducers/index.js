import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

const initialScream = (state = '', action) => {
    switch ('INITIAL') {
        case 'INITIAL':
            return 'TESTE';
        default:
            return 'TESTE';
    }
};


const rootReducer = combineReducers({
    initialScream,
    routing
});

export default rootReducer;
