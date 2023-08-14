import { SET_CAMPAIGN_STATUS_CHANGE } from "../../data/constants"

export const campaignStatusChange = [];

export const campaignStatusChangeData = (state = campaignStatusChange, action) => {
    switch (action.type) {
        case SET_CAMPAIGN_STATUS_CHANGE:
            return action.Maindata.data
		default:
            return state
    }
}