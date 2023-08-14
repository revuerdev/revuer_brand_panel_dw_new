import { SET_CATEGORY_LIST, CATEGORY_LIST } from "../../data/constants"

export const categoryListData = [];

export const categoryList = (state = categoryListData, action) => {
    switch (action.type) {
        case SET_CATEGORY_LIST:
            return action.Maindata.data
        default:
           return state
    }
}