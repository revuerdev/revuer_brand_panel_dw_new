import { SET_ALL_DECLINED_CAMPAIGN_LIST } from "../../data/constants"

export const allDeclinedCampaignList = [];

export const allDeclinedCampaignListData = (state = allDeclinedCampaignList, action) => {
    switch (action.type) {
        case SET_ALL_DECLINED_CAMPAIGN_LIST:
            return action.Maindata.data
		default:
            return state
    }
}