import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './active-users';
import ChoiceReducer from'./choice-reducer';

const allReducers = combineReducers({
    users: UserReducer,
    choiceMade: ChoiceReducer,
    activeUser: ActiveUserReducer
});

export default allReducers;