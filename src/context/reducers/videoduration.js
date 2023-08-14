import { SET_VIDEO_DURATION } from "../../data/constants"

export const videoDurationListData = [];

export const videoDurationList = (state = videoDurationListData, action) => {
    switch (action.type) {
        case SET_VIDEO_DURATION:
            return action.Maindata.data
        default:
           return state
    }
}