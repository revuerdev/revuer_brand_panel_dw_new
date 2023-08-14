import { REVUER_PARTICIPANTS_REPORT, SET_REVUER_PARTICIPANTS_REPORT } from "../../data/constants"

export const revuerParticipantsData = [];

export const revuerParticipantsReport = (state = revuerParticipantsData, action) => {
    switch (action.type) {
        case REVUER_PARTICIPANTS_REPORT:
            return action
        case SET_REVUER_PARTICIPANTS_REPORT:
            return action.Maindata.data
        default:
            return state
    }
}