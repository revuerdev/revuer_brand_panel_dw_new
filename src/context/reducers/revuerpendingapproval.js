import { SET_REVUER_PENDING_APPROVAL } from "../../data/constants"

export const revuerPendingApprovalList = [];

export const revuerPendingApprovalListData = (state = revuerPendingApprovalList, action) => {
    switch (action.type) {
        case SET_REVUER_PENDING_APPROVAL:
            return action.Maindata.data
		default:
            return state
    }
}