import { SET_ALL_REVIEW_CAMPAIGN_LIST } from "../../data/constants"

export const allReviewCampaignList = [];

export const allReviewCampaignListData = (state = allReviewCampaignList, action) => {
    switch (action.type) {
        case SET_ALL_REVIEW_CAMPAIGN_LIST:
            return action.Maindata.data
		default:
            return state
    }
}