import { SET_CAMPAIGN_TYPE, SET_BRAND_CAMPAIGN_LIST } from "../../data/constants"

export const campaignListData = [];

export const campaignData = (state = campaignListData, action) => {
    switch (action.type) {
        case SET_CAMPAIGN_TYPE:
            return action.Maindata.data
		default:
            return state
    }
} 
