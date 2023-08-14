import { VIDEO_DURATION, SET_VIDEO_DURATION } from "../../data/constants"

//Get Video Duration
export const  getVideoDuration = () => {
    return {
        type: VIDEO_DURATION,
    }
}

//Set Video Duration
export const setVideoDurationList = (Maindata = null) => {
    return {
          type: SET_VIDEO_DURATION,
          Maindata,
    };
}