import { SET_BRAND_SOCIAL_DATA_UPDATE } from "../../data/constants"

export const brandSocialData = [];

export const brandSocailDataUpdate = (state = brandSocialData, action) => {
    switch (action.type) {
        case SET_BRAND_SOCIAL_DATA_UPDATE:
            return action
        default:
            return state
    }
}