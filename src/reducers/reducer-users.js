let users =  [
        {
            id: 1,
            name: "Bucky",
            surname: "Roberts",
            patronymic: "Bucky is a React developer and YouTuber",
            username: 'bucky'
        },
        {
            id: 2,
            name: "Joby",
            surname: "Wasilenko",
            patronymic: "Joby loves the Packers, cheese, and turtles.",
            username: 'joby'
        },
        {
            id: 3,
            name: "Madison",
            surname: "Williams",
            patronymic: "Madi likes her dog but it is really annoying.",
            username: 'madi'
        }
];

export default function(state=users, action){
    switch(action.type){
        case "USER_ADDED":
            return [
                ...state,
                action.payload
            ];
            break;
    }
    return state;
}