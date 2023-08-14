import { REVUER_LIMIT_LIST, SET_REVUER_LIMIT_LIST } from "../../data/constants"

//Get Revuer Limit Data
export const getRevuerLimit = () => {
    return {
        type: REVUER_LIMIT_LIST,
    }
}

//Set Revuer Limit Data
export const setRevuerLimit = (Maindata = null) => {
    return {
          type: SET_REVUER_LIMIT_LIST,
          Maindata,
    };
}