import { SET_DISPLAY_CAMPAIGN_DETAILS } from "../../data/constants"

export const campaignTaskDetailsData = [];

export const taskDetailsCampaignData = (state = campaignTaskDetailsData, action) => {
    switch (action.type) {
        case SET_DISPLAY_CAMPAIGN_DETAILS:
            return action.Maindata.data
        default:
            return state
    }
}