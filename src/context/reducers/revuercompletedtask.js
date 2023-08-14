import { SET_REVUER_COMPLETED_TASK_LIST } from "../../data/constants"

export const revuerCompletedTaskList = [];

export const revuerCompletedTaskListData = (state = revuerCompletedTaskList, action) => {
    switch (action.type) {
        case SET_REVUER_COMPLETED_TASK_LIST:
            return action.Maindata.data
		default:
            return state
    }
}