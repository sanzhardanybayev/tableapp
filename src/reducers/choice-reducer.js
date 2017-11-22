export default function(state={}, action){
    switch(action.type){
        case "CHOICE_MADE":
            return action.payload;
            break;
    }
    return state;
}