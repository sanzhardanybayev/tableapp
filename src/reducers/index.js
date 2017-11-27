import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './active-users';
import ChoiceReducer from './choice-reducer';
import TaskReducer from './task-reducer';

const allReducers = combineReducers({
    users: UserReducer,
    choiceMade: ChoiceReducer,
    tasks: TaskReducer,
    activeUser: ActiveUserReducer
});

export default allReducers;