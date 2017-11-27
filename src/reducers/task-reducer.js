export default function(state=[], action){
    switch(action.type){
        case "TASKS_LOADED":
            return [
                ...state,
                ...action.payload
            ];
            break;
    }
    return state;
}