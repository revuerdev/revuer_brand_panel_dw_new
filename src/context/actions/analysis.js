import { BRAND_ANALYSIS_REPORT, SET_BRAND_ANALYSIS_REPORT, REVUER_PARTICIPANTS_REPORT, SET_REVUER_PARTICIPANTS_REPORT, GET_CAMPAIGN_NAMES, SET_CAMPAIGN_NAMES, GET_BRAND_CAMPIGN_REPORT, SET_BRAND_CAMPIGN_REPORT, GET_ONGOING_CAMPAIGN_NAMES, SET_ONGOING_CAMPAIGN_NAMES, REVUER_ONGOING_REPORT, SET_REVUER_ONGOING_REPORT, GET_ONGOING_CAMPAIGN_NAMES_IO, SET_ONGOING_CAMPAIGN_NAMES_IO } from "../../data/constants"

//Brand Update
export const getBrandAnalysisReport = (bodyData, submitButton, toastId) => {
    return {
        type: BRAND_ANALYSIS_REPORT,
        data: { bodyData, submitButton, toastId }
    }
}
//Set Brand Details
export const setBrandAnalysisReport = (Maindata = null) => {
    return {
        type: SET_BRAND_ANALYSIS_REPORT,
        Maindata,
    };
}
export const getRevuerParticipantsReport = (bodyData, submitButton, toastId) => {
    return {
        type: REVUER_PARTICIPANTS_REPORT,
        data: { bodyData, submitButton, toastId }
    }
}
//Set Revuer Participants
export const setRevuerParticipantsReport = (Maindata = null) => {
    return {
        type: SET_REVUER_PARTICIPANTS_REPORT,
        Maindata,
    };
}
export const getCampaignNames = (bodyData) => {
    return {
        type: GET_CAMPAIGN_NAMES,
        data: { bodyData }
    }
}
//Set Revuer Participants
export const setCampaignNames = (Maindata = null) => {
    return {
        type: SET_CAMPAIGN_NAMES,
        Maindata,
    };
}
export const getOngoingCampaignNames = (bodyData) => {
    return {
        type: GET_ONGOING_CAMPAIGN_NAMES,
        data: { bodyData }
    }
}
//Set Revuer Participants
export const setOngoingCampaignNames = (Maindata = null) => {
    return {
        type: SET_ONGOING_CAMPAIGN_NAMES,
        Maindata,
    };
}
export const getCampignNamesDataIo = (bodyData) => {
    return {
        type: GET_ONGOING_CAMPAIGN_NAMES_IO,
        data: { bodyData }
    }
}
//Set Revuer Participants
export const setCampignNamesDataIo = (Maindata = null) => {
    return {
        type: SET_ONGOING_CAMPAIGN_NAMES_IO,
        Maindata,
    };
}
export const getBrandCampaignReport = (bodyData) => {
    return {
        type: GET_BRAND_CAMPIGN_REPORT,
        data: { bodyData }
    }
}
//Set Revuer Participants
export const setBrandCampaignReport = (Maindata = null) => {
    return {
        type: SET_BRAND_CAMPIGN_REPORT,
        Maindata,
    };
}
export const getRevuerOngoingReport = (bodyData, submitButton, toastId) => {
    return {
        type: REVUER_ONGOING_REPORT,
        data: { bodyData, submitButton, toastId }
    }
}
//Set Revuer Participants
export const setRevuerOngoingReport = (Maindata = null) => {
    return {
        type: SET_REVUER_ONGOING_REPORT,
        Maindata,
    };
}