export default function(state={value: "DashBoard1"}, action){
    switch(action.type){
        case "CHOICE_MADE":
            return action.payload;
            break;
    }
    return state;
}