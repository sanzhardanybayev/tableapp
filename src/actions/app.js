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

export const usersLoaded = (value) => {
    return {
        type: "USERS_LOADED",
        payload: value
    }
};

export const tasksLoaded = (value) => {
    return {
        type: "TASKS_LOADED",
        payload: value
    }
};

