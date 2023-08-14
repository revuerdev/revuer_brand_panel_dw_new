import { SET_BRAND_EMAIL_OTP_SEND } from "../../data/constants"

export const brandEmailOtpData = [];

export const brandEmailOTP = (state = brandEmailOtpData, action) => {
    switch (action.type) {
        case SET_BRAND_EMAIL_OTP_SEND:
            return action
        default:
           return state
    }
}