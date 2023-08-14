import { REVUER_PENDING_APPROVAL, SET_REVUER_PENDING_APPROVAL, REVUER_ACCEPTED_LIST, SET_REVUER_ACCEPTED_LIST, REVUER_ALL_TASK_LIST, SET_REVUER_ALL_TASK_LIST, REVUER_COMPLETED_TASK_LIST, SET_REVUER_COMPLETED_TASK_LIST, REVUER_PARTICIPATION_APPROVAL, SET_REVUER_PARTICIPATION_APPROVAL, REVUER_PENDING_TASK_LIST, SET_REVUER_PENDING_TASK_LIST} from "../../data/constants"

//Get Revuer Pending Approval Listing
export const getRevuerPendingApproval = (bodyData) => {
    return {
        type: REVUER_PENDING_APPROVAL,
        data:{bodyData}
    }
}

//Set Revuer Pending Approval Listing
export const setRevuerPendingApproval = (Maindata) => {
    return {
        type: SET_REVUER_PENDING_APPROVAL,
        Maindata,
    } 
}

//Get Revuer Accepted Listing
export const getRevuerAccepted = (bodyData) => {
    return {
        type: REVUER_ACCEPTED_LIST,
        data:{bodyData}
    }
}

//Set Revuer Accepted Listing
export const setRevuerAccepted = (Maindata) => {
    return {
        type: SET_REVUER_ACCEPTED_LIST,
        Maindata,
    } 
}


//Get Revuer All Task
export const getRevuerAllTask = (bodyData) => {
    return {
        type: REVUER_ALL_TASK_LIST,
        data:{bodyData}
    }
}

//Set Revuer All Task
export const setRevuerAllTask = (Maindata) => {
    return {
        type: SET_REVUER_ALL_TASK_LIST,
        Maindata,
    } 
}

//Get Revuer Completed Task
export const getRevuerCompletedTask = (bodyData) => {
    return {
        type: REVUER_COMPLETED_TASK_LIST,
        data:{bodyData}
    }
}

//Set Revuer Completed Task
export const setRevuerCompletedTask = (Maindata) => {
    console.log("Main Data action Sert",Maindata)
    return {
        type: SET_REVUER_COMPLETED_TASK_LIST,
        Maindata,
    } 
}

//Get Revuer Pending Task
export const getRevuerPendingTask = (bodyData) => {
    return {
        type: REVUER_PENDING_TASK_LIST,
        data:{bodyData}
    }
}

//Set Revuer Pending Task
export const setRevuerPendingTask = (Maindata) => {
    return {
        type: SET_REVUER_PENDING_TASK_LIST,
        Maindata,
    } 
}

//Revuer Participation Approval
export const revuerParticipationApproval = (bodyData, navigate) => {
    return {
        type: REVUER_PARTICIPATION_APPROVAL,
        data:{bodyData, navigate}
    }
}

//Set Revuer Participation Approval
export const setRevuerParticipationApproval = (Maindata) => {
    return {
        type: SET_REVUER_PARTICIPATION_APPROVAL,
        Maindata,
    } 
}