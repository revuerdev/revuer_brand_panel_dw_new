import { GET_ONGOING_CAMPAIGN_NAMES, SET_ONGOING_CAMPAIGN_NAMES } from "../../data/constants"

export const ongoingCampaignNamesData = [];

export const getongoingCampaignName = (state = ongoingCampaignNamesData, action) => {
    switch (action.type) {
        case GET_ONGOING_CAMPAIGN_NAMES:
            return action
        case SET_ONGOING_CAMPAIGN_NAMES:
            return action.Maindata.data
        default:
            return state
    }
}