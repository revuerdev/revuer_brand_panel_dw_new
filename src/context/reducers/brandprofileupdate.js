import { SET_BRAND_PROFILE_UPDATE } from "../../data/constants"

export const brandProfileData = [];

export const brandProfile = (state = brandProfileData, action) => {
    switch (action.type) {
        case SET_BRAND_PROFILE_UPDATE:
            return action
        default:
           return state
    }
}