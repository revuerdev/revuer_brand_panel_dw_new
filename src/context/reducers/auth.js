import { SET_BRAND_REGISTER, SET_BRAND_CREATE_PASSWORD, SET_BRAND_FORGOT_PASSWORD, SET_BRAND_RESET_PASSWORD, SET_BRAND_LOGIN, SET_BRAND_RESEND_EMAIL } from "../../data/constants"

export const authData = [];

export const brnadAuthentication = (state = authData, action) => {
      switch (action.type) {
            case SET_BRAND_REGISTER:
                  return action
            case SET_BRAND_CREATE_PASSWORD:
                  return action
            case SET_BRAND_FORGOT_PASSWORD:
                  return action
            case SET_BRAND_RESET_PASSWORD:
                  return action
            case SET_BRAND_LOGIN:
                  return action
            case SET_BRAND_RESEND_EMAIL:
                  return action
            default:
                  return state
      }
} 
