import { BRAND_ANALYSIS_REPORT, SET_BRAND_ANALYSIS_REPORT } from "../../data/constants"

export const analysisBrandData = [];

export const analysisBrandRport = (state = analysisBrandData, action) => {
    switch (action.type) {
        case BRAND_ANALYSIS_REPORT:
            return action
        case SET_BRAND_ANALYSIS_REPORT:
            return action.Maindata.data
        default:
            return state
    }
}