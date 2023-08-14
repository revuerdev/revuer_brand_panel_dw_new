import { SET_REVUER_TASK_APPROVAL } from "../../data/constants"

export const revuerTaskApprovalAcceptedList = [];

export const revuerTaskApprovalAcceptedData = (state = revuerTaskApprovalAcceptedList, action) => {
    switch (action.type) {
        case SET_REVUER_TASK_APPROVAL:
            return action.Maindata.data
		default:
            return state
    }
}