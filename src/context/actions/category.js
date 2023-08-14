import { CATEGORY_LIST, SET_CATEGORY_LIST } from "../../data/constants"

//Get Category Data
export const getCategoryList = () => {
    return {
        type: CATEGORY_LIST,
    }
}

//Set Category Data
export const setCategoryList = (Maindata = null) => {
    return {
          type: SET_CATEGORY_LIST,
          Maindata,
    };
}