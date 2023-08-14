import { SET_CAMPAIGN_LIST } from "../../data/constants"

export const campaignListData = [];

export const listCampaignData = (state = campaignListData, action) => {
    switch (action.type) {
        case SET_CAMPAIGN_LIST:
            return action.Maindata.data
		default:
            return state
    }
}