export default function(state={value: "employee"}, action){
    switch(action.type){
        case "CHOICE_MADE":
            return action.payload;
            break;
    }
    return state;
}