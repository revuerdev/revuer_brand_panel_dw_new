import { GET_BRAND_CAMPIGN_REPORT, SET_BRAND_CAMPIGN_REPORT } from "../../data/constants"

export const brandCampignReportData = [];

export const brandCampignReport = (state = brandCampignReportData, action) => {
    switch (action.type) {
        case GET_BRAND_CAMPIGN_REPORT:
            return action
        case SET_BRAND_CAMPIGN_REPORT:
            return action.Maindata.data
        default:
            return state
    }
}