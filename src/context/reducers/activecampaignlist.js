import { SET_ALL_ACTIVE_CAMPAIGN_LIST } from "../../data/constants"

export const allActiveCampaignList = [];

export const allActiveCampaignListData = (state = allActiveCampaignList, action) => {
    switch (action.type) {
        case SET_ALL_ACTIVE_CAMPAIGN_LIST:
            return action.Maindata.data
		default:
            return state
    }
}