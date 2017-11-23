export const choiceMade = (value) => {
    return {
        type: "CHOICE_MADE",
        payload: value
    }
};

export const userAdded = (value) => {
    return {
        type: "USER_ADDED",
        payload: value
    }
};

