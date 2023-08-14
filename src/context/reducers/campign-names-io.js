import { GET_ONGOING_CAMPAIGN_NAMES_IO, SET_ONGOING_CAMPAIGN_NAMES_IO } from "../../data/constants"

export const campaignNamesDataIo = [];

export const getCampaignNameIo = (state = campaignNamesDataIo, action) => {
    switch (action.type) {
        case GET_ONGOING_CAMPAIGN_NAMES_IO:
            return action
        case SET_ONGOING_CAMPAIGN_NAMES_IO:
            return action.Maindata.data
        default:
            return state
    }
}