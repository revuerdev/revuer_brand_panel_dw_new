import { SET_CAMPAIGN_CREATE, SET_BRAND_CAMPAIGN_CREATE, SET_BRAND_CAMPAIGN_UPDATE } from "../../data/constants"

export const campaignCreateData = [];

export const createCampaignData = (state = campaignCreateData, action) => {
    switch (action.type) {
        case SET_CAMPAIGN_CREATE:
            return action.Maindata.data
        case SET_BRAND_CAMPAIGN_CREATE:
            return action.Maindata.data
        case SET_BRAND_CAMPAIGN_UPDATE:
            return action.Maindata.data
        default:
            return state
    }
}