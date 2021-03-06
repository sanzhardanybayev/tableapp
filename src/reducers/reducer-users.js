export default function(state=[], action){
    switch(action.type){
        case "USER_ADDED":
            return [
                ...state,
                action.payload
            ];
            break;
        case "USERS_LOADED":
            return [
                ...state,
                ...action.payload
            ];
            break;
    }
    return state;
}