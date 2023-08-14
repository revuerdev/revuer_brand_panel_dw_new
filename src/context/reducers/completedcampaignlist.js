import { SET_ALL_COMPLETED_CAMPAIGN_LIST } from "../../data/constants"

export const allCompletedCampaignList = [];

export const allCompletedCampaignListData = (state = allCompletedCampaignList, action) => {
    switch (action.type) {
        case SET_ALL_COMPLETED_CAMPAIGN_LIST:
            return action.Maindata.data
		default:
            return state
    }
}