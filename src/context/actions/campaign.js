import { CAMPAIGN_TYPE, SET_CAMPAIGN_TYPE, CAMPAIGN_CREATE, SET_CAMPAIGN_CREATE, CAMPAIGN_LIST, SET_CAMPAIGN_LIST, BRAND_CAMPAIGN_CREATE, SET_BRAND_CAMPAIGN_CREATE, CAMPAIGN_DETAILS, SET_CAMPAIGN_DETAILS, BRAND_CAMPAIGN_UPDATE, SET_BRAND_CAMPAIGN_UPDATE, DISPLAY_CAMPAIGN_DETAILS, SET_DISPLAY_CAMPAIGN_DETAILS, ALL_REVIEW_CAMPAIGN_LIST, SET_ALL_REVIEW_CAMPAIGN_LIST, ALL_ACTIVE_CAMPAIGN_LIST, SET_ALL_ACTIVE_CAMPAIGN_LIST, ALL_COMPLETED_CAMPAIGN_LIST, SET_ALL_COMPLETED_CAMPAIGN_LIST, ALL_DECLINED_CAMPAIGN_LIST, SET_ALL_DECLINED_CAMPAIGN_LIST, CAMPAIGN_DELETE, SET_CAMPAIGN_DELETE, CAMPAIGN_STATUS_CHANGE, SET_CAMPAIGN_STATUS_CHANGE } from "../../data/constants"

//Get Campaign Type
export const getCamapignType = () => {
    return {
        type: CAMPAIGN_TYPE,
    }
}

//Set Campaign type
export const setCampaignType = (Maindata = null) => {
    return {
        type: SET_CAMPAIGN_TYPE,
        Maindata,
    };
}

//Create Campaign
export const campaignCreate = (bodyData, navigate, submitButton, toastId) => {
    return {
        type: CAMPAIGN_CREATE,
        data: { bodyData, navigate, submitButton, toastId }
    }
}

//Set Campaign Create
export const setCampaignCreate = (Maindata = null) => {
    return {
        type: SET_CAMPAIGN_CREATE,
        Maindata,
    };
}

//Get Campaign List
export const getCampaignList = (bodyData) => {
    return {
        type: CAMPAIGN_LIST,
        data: { bodyData }
    }
}

//Set Campaign List
export const setCampaignList = (Maindata = null) => {
    return {
        type: SET_CAMPAIGN_LIST,
        Maindata,
    };
}

//Brand Create Campaign
export const brandCampaignCreate = (bodyData, navigate, submitButton, toastId) => {
    return {
        type: BRAND_CAMPAIGN_CREATE,
        data: { bodyData, navigate, submitButton, toastId }
    }
}

//Set Brand Campaign Create
export const setBrandCampaignCreate = (Maindata = null) => {
    return {
        type: SET_BRAND_CAMPAIGN_CREATE,
        Maindata,
    };
}

//Get Campaign Details
export const getCampaignDetails = (bodyData, navigate) => {
    return {
        type: CAMPAIGN_DETAILS,
        data:{bodyData, navigate}
    }
}

//Set Campaign Details
export const setCampaignDetails = (Maindata = null) => {
    return {
        type: SET_CAMPAIGN_DETAILS,
        Maindata,
    };
}

//Brand Update Campaign
export const brandCampaignUpdate = (bodyData, navigate, submitButton, toastId) => {
    return {
        type: BRAND_CAMPAIGN_UPDATE,
        data: { bodyData, navigate, submitButton, toastId }
    }
}

//Set Brand Campaign Update
export const setBrandCampaignUpdate = (Maindata = null) => {
    return {
        type: SET_BRAND_CAMPAIGN_UPDATE,
        Maindata,
    };
}

//Get Display Campaign Details
export const getDisplayCampaignDetails = (bodyData, navigate) => {
    return {
        type: DISPLAY_CAMPAIGN_DETAILS,
        data:{bodyData, navigate}
    }
}

//Set Display Campaign Details
export const setDisplayCampaignDetails = (Maindata = null) => {
    return {
        type: SET_DISPLAY_CAMPAIGN_DETAILS,
        Maindata,
    };
}

//Get Campaign View All Review Listing
export const getCampaignReviewListData = (bodyData) => {
    return {
        type: ALL_REVIEW_CAMPAIGN_LIST,
        data:{bodyData}
    }
}

//Set Campaign View All Review Listing
export const setCampaignReviewListData = (Maindata) => {
    return {
        type: SET_ALL_REVIEW_CAMPAIGN_LIST,
        Maindata,
    } 
}


//Get Campaign View All Active Listing
export const getCampaignActiveListData = (bodyData) => {
    return {
        type: ALL_ACTIVE_CAMPAIGN_LIST,
        data:{bodyData}
    }
}

//Set Campaign View All Active Listing
export const setCampaignActiveListData = (Maindata) => {
    return {
        type: SET_ALL_ACTIVE_CAMPAIGN_LIST,
        Maindata,
    } 
}

//Get Campaign View All Completed Listing
export const getCampaignCompletedListData = (bodyData) => {
    return {
        type: ALL_COMPLETED_CAMPAIGN_LIST,
        data:{bodyData}
    }
}

//Set Campaign View All Completed Listing
export const setCampaignCompletedListData = (Maindata) => {
    return {
        type: SET_ALL_COMPLETED_CAMPAIGN_LIST,
        Maindata,
    } 
}

//Get Campaign View All Declined Listing
export const getCampaignDeclinedListData = (bodyData) => {
    return {
        type: ALL_DECLINED_CAMPAIGN_LIST,
        data:{bodyData}
    }
}

//Set Campaign View All Completed Listing
export const setCampaignDeclinedListData = (Maindata) => {
    return {
        type: SET_ALL_DECLINED_CAMPAIGN_LIST,
        Maindata,
    } 
}


//Campaign Delete
export const brandCampaignDelete = (bodyData) => {
    return {
        type: CAMPAIGN_DELETE,
        data:{bodyData}
    }
}

//Set Campaign Delete
export const setBrandCampaignDelete = (Maindata) => {
    return {
        type: SET_CAMPAIGN_DELETE,
        Maindata,
    } 
}


//Campaign Delete
export const brandCampaignStatusChange = (bodyData) => {
    return {
        type: CAMPAIGN_STATUS_CHANGE,
        data:{bodyData}
    }
}

//Set Campaign Delete
export const setBrandCampaignStatusChange = (Maindata) => {
    return {
        type: SET_CAMPAIGN_STATUS_CHANGE,
        Maindata,
    } 
}