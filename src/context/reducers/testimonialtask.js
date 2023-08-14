import { SET_TESTIMONIAL_TASK_DETAILS } from "../../data/constants"

export const testimonialTaskList = [];

export const testimonialTaskListData = (state = testimonialTaskList, action) => {
    switch (action.type) {
        case SET_TESTIMONIAL_TASK_DETAILS:
            return action.Maindata.data
		default:
            return state
    }
}