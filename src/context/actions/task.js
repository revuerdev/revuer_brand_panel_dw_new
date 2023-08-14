import { INFLUENCER_TASK_DETAILS, SET_INFLUENCER_TASK_DETAILS, TESTIMONIAL_TASK_DETAILS, SET_TESTIMONIAL_TASK_DETAILS, VISUAL_TASK_DETAILS, SET_VISUAL_TASK_DETAILS, REVUER_TASK_APPROVAL, SET_REVUER_TASK_APPROVAL, FEEDBACK_MESSAGE_SUBMIT, SET_FEEDBACK_MESSAGE_SUBMIT } from "../../data/constants"

//Get Influencer Task Details
export const getInfluencerTaskDetails = (bodyData, navigate) => {
    return {
        type: INFLUENCER_TASK_DETAILS,
        data:{bodyData, navigate}
    }
}

//Set Influencer Task Details
export const setInfluencerTaskDetails = (Maindata) => {
    return {
        type: SET_INFLUENCER_TASK_DETAILS,
        Maindata,
    } 
}


//Get Testimonial Task Details
export const getTestimonialTaskDetails = (bodyData, navigate) => {
    return {
        type: TESTIMONIAL_TASK_DETAILS,
        data:{bodyData, navigate}
    }
}

//Set Testimonial Task Details
export const setTestimonialTaskDetails = (Maindata) => {
    return {
        type: SET_TESTIMONIAL_TASK_DETAILS,
        Maindata,
    } 
}


//Get Visual Task Details
export const getVisualTaskDetails = (bodyData, navigate) => {
    return {
        type: VISUAL_TASK_DETAILS,
        data:{bodyData, navigate}
    }
}

//Set Visual Task Details
export const setVisualTaskDetails = (Maindata) => {
    return {
        type: SET_VISUAL_TASK_DETAILS,
        Maindata,
    } 
}


//Revuer Task Approval
export const revuerTaskApproval = (bodyData, navigate) => {
    return {
        type: REVUER_TASK_APPROVAL,
        data:{bodyData, navigate}
    }
}

//Set Revuer Task Approval
export const setRevuerTaskApproval = (Maindata) => {
    return {
        type: SET_REVUER_TASK_APPROVAL,
        Maindata,
    } 
}

//Feedback Message Submit
export const feedbackMessageSubmit = (bodyData) => {
    return {
        type: FEEDBACK_MESSAGE_SUBMIT,
        data:{bodyData}
    }
}

//Set Feedback Message Submit
export const setFeedbackMessageSubmit = (Maindata) => {
    return {
        type: SET_FEEDBACK_MESSAGE_SUBMIT,
        Maindata,
    } 
}