import { BRAND_UPDATE, BRAND_DETAILS, SET_BRAND_DETAILS, SET_BRAND_UPDATE, BRAND_PROFILE_UPDATE, SET_BRAND_PROFILE_UPDATE, BRAND_EMAIL_OTP_SEND, SET_BRAND_EMAIL_OTP_SEND, BRAND_SOCIAL_DATA_UPDATE, SET_BRAND_SOCIAL_DATA_UPDATE } from "../../data/constants"

//Brand Update
export const brandDetailsUpdate = (bodyData, navigate, submitButton, toastId) => {
    return {
        type: BRAND_UPDATE,
        data: { bodyData, navigate, submitButton, toastId }
    }
}

//Set Brand Update
export const setBrandUpdate = (Maindata = null) => {
    return {
        type: SET_BRAND_UPDATE,
        Maindata,
    };
}

//Get Brand Details
export const getBrandDetails = (bodyData) => {
    return {
        type: BRAND_DETAILS,
        data: { bodyData }
    }
}

//Set Brand Details
export const setBrandDetails = (Maindata = null) => {
    return {
        type: SET_BRAND_DETAILS,
        Maindata,
    };
}


//Brand Profile Update
export const brandProfileDataUpdate = (bodyData) => {
    return {
        type: BRAND_PROFILE_UPDATE,
        data: { bodyData }
    }
}

//Set Brand Profile Update
export const setBrandProfileDataUpdate = (Maindata = null) => {
    return {
        type: SET_BRAND_PROFILE_UPDATE,
        Maindata,
    };
}

//Brand Email OTP Send
export const brandProfileEmailOtp = (bodyData) => {
    return {
        type: BRAND_EMAIL_OTP_SEND,
        data: { bodyData }
    }
}

//Set Brand Email OTP Send
export const setBrandProfileEmailOtp = (Maindata = null) => {
    return {
        type: SET_BRAND_EMAIL_OTP_SEND,
        Maindata,
    };
}
//Brand Socail Data
export const socialDataUpdate = (bodyData) => {
    return {
        type: BRAND_SOCIAL_DATA_UPDATE,
        data: { bodyData }
    }
}

//Set Brand Email OTP Send
export const setsocialDataUpdate = (Maindata = null) => {
    return {
        type: SET_BRAND_SOCIAL_DATA_UPDATE,
        Maindata,
    };
}

