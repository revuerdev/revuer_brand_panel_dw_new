import { SET_GET_TOTAL_ACTION_COUNT } from "../../data/constants"

export const actionCountListData = [];

export const actionCountData = (state = actionCountListData, action) => {
    switch (action.type) {
        case SET_GET_TOTAL_ACTION_COUNT:
            return action.Maindata.data
		default:
            return state
    }
} 
