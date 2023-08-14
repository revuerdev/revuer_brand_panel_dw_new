import { SET_BRAND_DETAILS, SET_BRAND_UPDATE } from "../../data/constants"

export const brandDetailstData = [];

export const brandDetails = (state = brandDetailstData, action) => {
    switch (action.type) {
        case SET_BRAND_UPDATE:
            return action
        case SET_BRAND_DETAILS:
            return action.Maindata.data
        default:
           return state
    }
}