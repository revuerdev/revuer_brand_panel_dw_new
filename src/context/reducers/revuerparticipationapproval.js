import { SET_REVUER_PARTICIPATION_APPROVAL } from "../../data/constants"

export const revuerPartipationApprovalAcceptedList = [];

export const revuerPartipationApprovalAcceptedData = (state = revuerPartipationApprovalAcceptedList, action) => {
    switch (action.type) {
        case SET_REVUER_PARTICIPATION_APPROVAL:
            return action.Maindata.data
		default:
            return state
    }
}