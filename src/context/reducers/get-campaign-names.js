import { GET_CAMPAIGN_NAMES, SET_CAMPAIGN_NAMES } from "../../data/constants"

export const campaignNamesData = [];

export const getcampaignName = (state = campaignNamesData, action) => {
    switch (action.type) {
        case GET_CAMPAIGN_NAMES:
            return action
        case SET_CAMPAIGN_NAMES:
            return action.Maindata.data
        default:
            return state
    }
}