import { INTEREST_LIST, SET_INTEREST_LIST } from "../../data/constants"

//Get Interest
export const getInterests = () => {
    return {
        type: INTEREST_LIST,
    }
}

//Set Interest
export const setInterests = (Maindata = null) => {
    return {
          type: SET_INTEREST_LIST,
          Maindata,
    };
}