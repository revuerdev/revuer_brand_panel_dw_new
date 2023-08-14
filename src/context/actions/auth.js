import { BRAND_REGISTER, BRAND_CREATE_PASSWORD, BRAND_FORGOT_PASSWORD, BRAND_RESET_PASSWORD, BRAND_LOGIN, SET_BRAND_REGISTER, SET_BRAND_CREATE_PASSWORD, SET_BRAND_FORGOT_PASSWORD, SET_BRAND_RESET_PASSWORD, SET_BRAND_LOGIN, BRAND_RESEND_EMAIL, SET_BRAND_RESEND_EMAIL } from "../../data/constants"

//Register
export const brandRegister = (bodyData,navigate,submitButton,toastId) => {
	return {
        type: BRAND_REGISTER,
        data:{bodyData,navigate,submitButton,toastId}
    }
}

export const setRegister = (Maindata = null) => {
    return {
          type: SET_BRAND_REGISTER,
          payload: Maindata,
    };
}

//Create Password
export const brandCreatePassword = (bodyData,submitButton,toastId) => {
	return {
        type: BRAND_CREATE_PASSWORD,
        data: {bodyData,submitButton,toastId}
    }
}

export const setBrandCreatePassword = (Maindata = null) => {
    return {
          type: SET_BRAND_CREATE_PASSWORD,
          payload: Maindata,
    };
}

//Forgot Password
export const brandForgotPassword = (bodyData,navigate,submitButton,toastId) => {
	return {
        type: BRAND_FORGOT_PASSWORD,
        data: {bodyData,navigate,submitButton,toastId}
    }
}

export const setBrandForgotPassword = (Maindata = null) => {
    return {
          type: SET_BRAND_FORGOT_PASSWORD,
          payload: Maindata,
    };
}

//Reset Password
export const brandResetPassword = (bodyData,submitButton,toastId) => {
	return {
        type: BRAND_RESET_PASSWORD,
        data: {bodyData,submitButton,toastId}
    }
}

export const setBrandResetPassword = (Maindata = null) => {
    return {
          type: SET_BRAND_RESET_PASSWORD,
          payload: Maindata,
    };
}

//Login
export const brandLogin = (bodyData,navigate,submitButton,toastId) => {
	return {
        type: BRAND_LOGIN,
        data: {bodyData,navigate,submitButton,toastId}
    }
}

export const setBrandLogin = (Maindata = null) => {
    return {
          type: SET_BRAND_LOGIN,
          payload: Maindata,
    };
}

//Resend Email
export const brandResendEmail = (bodyData,navigate,submitButton,toastId) => {
	return {
        type: BRAND_RESEND_EMAIL,
        data: {bodyData,navigate,submitButton,toastId}
    }
}

export const setBrandResendEmail = (Maindata = null) => {
    return {
          type: SET_BRAND_RESEND_EMAIL,
          payload: Maindata,
    };
}