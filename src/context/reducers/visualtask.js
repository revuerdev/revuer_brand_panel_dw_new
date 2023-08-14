import { SET_VISUAL_TASK_DETAILS } from "../../data/constants"

export const visualTaskList = [];

export const visualTaskListData = (state = visualTaskList, action) => {
    switch (action.type) {
        case SET_VISUAL_TASK_DETAILS:
            return action.Maindata.data
		default:
            return state
    }
}