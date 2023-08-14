import { SET_REVUER_ALL_TASK_LIST } from "../../data/constants"

export const revuerAllTaskList = [];

export const revuerAllTaskListData = (state = revuerAllTaskList, action) => {
    switch (action.type) {
        case SET_REVUER_ALL_TASK_LIST:
            return action.Maindata.data
		default:
            return state
    }
}