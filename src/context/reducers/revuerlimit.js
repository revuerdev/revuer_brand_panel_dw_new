import { SET_REVUER_LIMIT_LIST } from "../../data/constants"

export const revuerLimitListData = [];

export const revuerLimitList = (state = revuerLimitListData, action) => {
    switch (action.type) {
        case SET_REVUER_LIMIT_LIST:
            return action.Maindata.data
        default:
           return state
    }
}