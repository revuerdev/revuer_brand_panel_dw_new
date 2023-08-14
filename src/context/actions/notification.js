import { GET_NOTIFICATION, SET_NOTIFICATION, GET_TOTAL_ACTION_COUNT, SET_GET_TOTAL_ACTION_COUNT } from "../../data/constants"

//get Notification Data
export const getNotificationData = (bodyData) => {
    return {
        type: GET_NOTIFICATION,
        data: { bodyData }
    }
}

//Set Notification Data
export const setNotificationData = (Maindata = null) => {
    return {
        type: SET_NOTIFICATION,
        Maindata,
    };
}


//get Notification Data
export const getTotalActionCount = (bodyData) => {
    return {
        type: GET_TOTAL_ACTION_COUNT,
        data: { bodyData }
    }
}

//Set Notification Data
export const setTotalActionCount = (Maindata = null) => {
    return {
        type: SET_GET_TOTAL_ACTION_COUNT,
        Maindata,
    };
}