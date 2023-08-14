import { SET_INFLUENCER_TASK_DETAILS } from "../../data/constants"

export const influencerTaskList = [];

export const influencerTaskListData = (state = influencerTaskList, action) => {
    switch (action.type) {
        case SET_INFLUENCER_TASK_DETAILS:
            return action.Maindata.data
		default:
            return state
    }
}