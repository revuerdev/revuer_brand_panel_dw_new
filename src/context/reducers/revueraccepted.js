import { SET_REVUER_ACCEPTED_LIST } from "../../data/constants"

export const revuerAcceptedList = [];

export const revuerAcceptedListData = (state = revuerAcceptedList, action) => {
    switch (action.type) {
        case SET_REVUER_ACCEPTED_LIST:
            return action.Maindata.data
		default:
            return state
    }
}