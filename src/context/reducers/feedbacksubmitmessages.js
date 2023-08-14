import { SET_FEEDBACK_MESSAGE_SUBMIT } from "../../data/constants"

export const submitFeedbackMessage = [];

export const submitFeedbackMessageData = (state = submitFeedbackMessage, action) => {
    switch (action.type) {
        case SET_FEEDBACK_MESSAGE_SUBMIT:
            return action.Maindata.data
		default:
            return state
    }
}