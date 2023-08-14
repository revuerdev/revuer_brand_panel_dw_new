import { SET_NOTIFICATION } from "../../data/constants"

export const notificationListData = [];

export const notificationData = (state = notificationListData, action) => {
    switch (action.type) {
        case SET_NOTIFICATION:
            return action.Maindata.data
		default:
            return state
    }
} 
