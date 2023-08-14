import { SET_INTEREST_LIST } from "../../data/constants"

export const interestsListData = [];

export const interestsList = (state = interestsListData, action) => {
    switch (action.type) {
        case SET_INTEREST_LIST:
            return action.Maindata.data
        default:
           return state
    }
}