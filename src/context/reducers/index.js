import { combineReducers } from "redux";

import { brnadAuthentication } from "../reducers/auth"
import { categoryList } from "../reducers/category"
import { campaignData } from "../reducers/campaign"
import { brandDetails } from "../reducers/brand"
import { revuerLimitList } from "../reducers/revuerlimit"
import { interestsList } from "../reducers/interests"
import { createCampaignData } from "../reducers/campaigncreate"
import { listCampaignData } from "../reducers/campaignlist"
import { detailsCampaignData } from "../reducers/campaigndetails"
import { videoDurationList } from "../reducers/videoduration"
import { taskDetailsCampaignData } from "../reducers/campaigntaskdetails"
import { allReviewCampaignListData } from "../reducers/reviewcampaignlist"
import { allActiveCampaignListData } from "../reducers/activecampaignlist"
import { allCompletedCampaignListData } from "../reducers/completedcampaignlist"
import { allDeclinedCampaignListData } from "../reducers/declinedcampaignlist"
import { revuerPendingApprovalListData } from "../reducers/revuerpendingapproval"
import { revuerAcceptedListData } from "../reducers/revueraccepted"
import { revuerAllTaskListData } from "../reducers/revueralltask"
import { revuerCompletedTaskListData } from "../reducers/revuercompletedtask"
import { revuerPartipationApprovalAcceptedData } from "../reducers/revuerparticipationapproval"
import { revuerPendingTaskListData } from "../reducers/revuerpendingtask"
import { influencerTaskListData } from "../reducers/influencertask"
import { testimonialTaskListData } from "../reducers/testimonialtask"
import { visualTaskListData } from "../reducers/visualtask"
import { revuerTaskApprovalAcceptedData } from "../reducers/revuertaskapproval"
import { submitFeedbackMessageData } from "../reducers/feedbacksubmitmessages"
import { campaignDeleteData } from "../reducers/campaigndelete"
import { notificationData } from "../reducers/notification"
import { actionCountData } from "../reducers/actioncount"
import { campaignStatusChangeData } from "../reducers/campaignstatuschange"
import { brandProfile } from "../reducers/brandprofileupdate"
import { brandEmailOTP } from "../reducers/brandemailotp"
import { analysisBrandRport } from "../reducers/analysis-brand-report"
import { revuerParticipantsReport } from "../reducers/revuer-participants-report"
import { getcampaignName } from "../reducers/get-campaign-names"
import { brandCampignReport } from "../reducers/brand-campaign-report"
import { getongoingCampaignName } from "../reducers/ongoing-campign-names"
import { getCampaignNameIo } from "../reducers/campign-names-io"
import { revuerOngoingReport } from "../reducers/revuer-ongoing-report"
import { brandSocailDataUpdate } from "../reducers/brand-social-data-update"

export default combineReducers({
    brnadAuthentication,
    categoryList,
    campaignData,
    brandDetails,
    revuerLimitList,
    interestsList,
    createCampaignData,
    listCampaignData,
    detailsCampaignData,
    videoDurationList,
    taskDetailsCampaignData,
    allReviewCampaignListData,
    allActiveCampaignListData,
    allCompletedCampaignListData,
    allDeclinedCampaignListData,
    revuerPendingApprovalListData,
    revuerAcceptedListData,
    revuerAllTaskListData,
    revuerCompletedTaskListData,
    revuerPartipationApprovalAcceptedData,
    revuerPendingTaskListData,
    influencerTaskListData,
    testimonialTaskListData,
    visualTaskListData,
    revuerTaskApprovalAcceptedData,
    submitFeedbackMessageData,
    campaignDeleteData,
    notificationData,
    actionCountData,
    campaignStatusChangeData,
    brandProfile,
    brandEmailOTP,
    analysisBrandRport,
    revuerParticipantsReport,
    getcampaignName,
    brandCampignReport,
    getongoingCampaignName,
    revuerOngoingReport,
    brandSocailDataUpdate,
    getCampaignNameIo
})