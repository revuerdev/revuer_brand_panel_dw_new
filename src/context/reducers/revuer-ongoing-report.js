import { REVUER_ONGOING_REPORT, SET_REVUER_ONGOING_REPORT } from "../../data/constants"

export const revuerOngoingData = [];

export const revuerOngoingReport = (state = revuerOngoingData, action) => {
    switch (action.type) {
        case REVUER_ONGOING_REPORT:
            return action
        case SET_REVUER_ONGOING_REPORT:
            return action.Maindata.data
        default:
            return state
    }
}