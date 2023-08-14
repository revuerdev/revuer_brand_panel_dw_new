import { SET_REVUER_PENDING_TASK_LIST } from "../../data/constants"

export const revuerPendingTaskList = [];

export const revuerPendingTaskListData = (state = revuerPendingTaskList, action) => {
    switch (action.type) {
        case SET_REVUER_PENDING_TASK_LIST:
            return action.Maindata.data
		default:
            return state
    }
}