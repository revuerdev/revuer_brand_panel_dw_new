import { SET_CAMPAIGN_DELETE } from "../../data/constants"

export const campaignDelete = [];

export const campaignDeleteData = (state = campaignDelete, action) => {
    switch (action.type) {
        case SET_CAMPAIGN_DELETE:
            return action.Maindata.data
		default:
            return state
    }
}