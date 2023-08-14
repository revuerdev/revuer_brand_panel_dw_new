import { SET_CAMPAIGN_DETAILS, SET_DISPLAY_CAMPAIGN_DETAILS } from "../../data/constants"

export const campaignDetailsData = [];

export const detailsCampaignData = (state = campaignDetailsData, action) => {
    switch (action.type) {
        case SET_CAMPAIGN_DETAILS:
            return action.Maindata.data
		case SET_DISPLAY_CAMPAIGN_DETAILS:
            return action.Maindata.data
        default:
            return state
    }
}