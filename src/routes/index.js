import { Routes, Route, useLocation } from "react-router-dom"
import Root from "../pages"
import Login from "../pages/auth/login"
import Register from "../pages/auth/register"
import ForgotPassword from "../pages/auth/forgot-password"
import ResendEmail from "../pages/auth/resend-email"
import ResetPassword from "../pages/auth/reset-password"
import EmailVerify from "../pages/auth/email-verify"
import CreatePassword from "../pages/auth/create-password"
import UserSubscription from "../pages/user/user-subscription"
import MakePayment from "../pages/user/make-payment"
import SetupBrandDetails from "../pages/user/setup-brand-details"
import SetupUserDetails from "../pages/user/setup-user-details"
import Dassbord from "../pages/account/dassbord"
import Planmenu from "../pages/account/plan-menu"
import Inboxpage from "../pages/account/inbox"
import Accountdetails from "../pages/account/account-details"
import Myaccount from "../pages/account/my-account"
import EmailBrand from "../pages/account/emailbrand"
import Campaignpage from "../pages/campaign/campaign-page"
import Campaignselepage from "../pages/campaign/campaignsele-page"
import CampaignDetailsPage from "../pages/campaign/campaign-details-page"
import CampaignDetailsPaymentdone from "../pages/campaign/campaign-details-payment-done"
import CampaignDetailsVideodone from "../pages/campaign/campaign-details-video-menegment"
import CampaignDetailsTestimonial from "../pages/campaign/campaign-details-testimonial"
import CampaignDetailsSampling from "../pages/campaign/campaign-details-sampling"
import CampaignDetailsSurvey from "../pages/campaign/campaign-details-survey"
import CampaignDetailsInfluncerOutreach from "../pages/campaign/campaign-details-influncer-outreach"
import CampaignDetailsMarketResearc from "../pages/campaign/campaign-details-market-researc"
import CampaignMenegmentActive from "../pages/campaign/campaign-menegment-active"
import CampaignMenegmentActiveRequest from "../pages/campaign/campaign-menegment-active-request"
import CampaignTaskDetails from "../pages/campaign/campaign-task-details"
import CampaignDetailsTaskRequest from "../pages/campaign/campaign-details-task-request"
import CampaignDetailsProductReview from "../pages/campaign/campaign-details-product-review"
import CampaignDetailsVideoReview from "../pages/campaign/campaign-details-video-review"
import CampaignDetailstestimonialReview from "../pages/campaign/campaign-details-testimonial-review"
import CampaignDetailsSamplingReview from "../pages/campaign/campaign-details-sampling-review"
import CampaignDetailsServeyReview from "../pages/campaign/campaign-details-servey-review"
import CampaignDetailsInfluncerReview from "../pages/campaign/campaign-details-influncer-outreach-review"
import PublicRoutes from "../middleware/PublicRoutes"
import ProtectedRoutes from "../middleware/ProtectedRoutes"
import BrandRoutes from "../middleware/BrandRoutes"
import CampaignRoutes from "../middleware/CampaignRoutes"
import PrivacyPolicy from "../pages/account/privacy-policy"
import BrandAnalysis from "../pages/analysis/brand"
import RevuerParticipants from "../pages/analysis/revuer-participants"
import BrandCampaignReport from "../pages/analysis/brand-campign-report"
import OngoingReport from "../pages/analysis/ongoing-report"
import NotFound from "../pages/error/not-found"
import { Helmet } from 'react-helmet';
import { useEffect, useState } from "react"

function App() {
    const [currentTitle, setCurrentTitle] = useState("RevuEr")
    const DynamicMeta = () => {
        const location = useLocation();
        useEffect(() => {
            let pathname = window.location.pathname.split("/")
            pathname = pathname[2]
            let current_route = ""
            pathname.split("-").map(item => {
                current_route += item[0].toUpperCase() + item.substring(1) + " "
            })
            setCurrentTitle(current_route.trim());
        }, [location]);
        return (
            <Helmet>
                <title>{currentTitle}</title>
            </Helmet>
        )
    }
    return (
        <Routes>
            <Route path={`/`} excat={true} element={<Root />} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/login`} excat={true} element={<PublicRoutes><DynamicMeta /><Login /></PublicRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/register`} excat={true} element={<PublicRoutes><DynamicMeta /><Register /></PublicRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/forgot-password`} excat={true} element={<PublicRoutes><DynamicMeta /><ForgotPassword /></PublicRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/resend-email`} excat={true} element={<PublicRoutes><DynamicMeta /><ResendEmail /></PublicRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/reset-password/:any`} excat={true} element={<PublicRoutes><DynamicMeta /><ResetPassword /></PublicRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/email-verify`} excat={true} element={<PublicRoutes><DynamicMeta /><EmailVerify /></PublicRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/create-password/:any`} excat={true} element={<PublicRoutes><DynamicMeta /><CreatePassword /></PublicRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/user-subscription`} excat={true} element={<ProtectedRoutes><DynamicMeta /><UserSubscription /></ProtectedRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/make-payment`} excat={true} element={<ProtectedRoutes><DynamicMeta /><MakePayment /></ProtectedRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/setup-brand-details`} excat={true} element={<BrandRoutes><DynamicMeta /><SetupBrandDetails /></BrandRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/setup-user-details`} excat={true} element={<PublicRoutes><DynamicMeta /><DynamicMeta /><CampaignRoutes><SetupUserDetails /></CampaignRoutes></PublicRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/dashboard`} excat={true} element={<ProtectedRoutes><DynamicMeta /><Dassbord /></ProtectedRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/plan-menu`} excat={true} element={<ProtectedRoutes><DynamicMeta /><Planmenu /></ProtectedRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/inbox`} excat={true} element={<ProtectedRoutes><DynamicMeta />< Inboxpage /></ProtectedRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/account-details`} excat={true} element={<ProtectedRoutes><DynamicMeta />< Accountdetails /></ProtectedRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/my-account`} excat={true} element={<ProtectedRoutes><DynamicMeta /><Myaccount /></ProtectedRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/emailbrand`} excat={true} element={<EmailBrand />} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/campaign-page`} excat={true} element={<ProtectedRoutes><DynamicMeta /><Campaignpage /></ProtectedRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/campaignsele-page`} excat={true} element={<ProtectedRoutes><DynamicMeta /><Campaignselepage /></ProtectedRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/campaign-details-page/:any`} excat={true} element={<ProtectedRoutes><DynamicMeta />< CampaignDetailsPage /></ProtectedRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/campaign-details-payment-done`} excat={true} element={<ProtectedRoutes><DynamicMeta />< CampaignDetailsPaymentdone /></ProtectedRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/campaign-details-video-menegment`} excat={true} element={<ProtectedRoutes><DynamicMeta />< CampaignDetailsVideodone /></ProtectedRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/campaign-details-testimonial`} excat={true} element={<ProtectedRoutes><DynamicMeta />< CampaignDetailsTestimonial /></ProtectedRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/campaign-details-sampling`} excat={true} element={<ProtectedRoutes><DynamicMeta />< CampaignDetailsSampling /></ProtectedRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/campaign-details-survey`} excat={true} element={<ProtectedRoutes><DynamicMeta />< CampaignDetailsSurvey /></ProtectedRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/campaign-details-influncer-outreach`} excat={true} element={<ProtectedRoutes><DynamicMeta />< CampaignDetailsInfluncerOutreach /></ProtectedRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/campaign-details-market-researc`} excat={true} element={<ProtectedRoutes><DynamicMeta />< CampaignDetailsMarketResearc /></ProtectedRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/campaign-menegment-active`} excat={true} element={<ProtectedRoutes><DynamicMeta />< CampaignMenegmentActive /></ProtectedRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/campaign-menegment-active-request/:any`} excat={true} element={<ProtectedRoutes><DynamicMeta />< CampaignMenegmentActiveRequest /></ProtectedRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/campaign-task-details/:any`} excat={true} element={<ProtectedRoutes><DynamicMeta />< CampaignTaskDetails /></ProtectedRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/campaign-details-task-request`} excat={true} element={<ProtectedRoutes><DynamicMeta /><CampaignDetailsTaskRequest /></ProtectedRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/campaign-details-product-review`} excat={true} element={<ProtectedRoutes><DynamicMeta /><CampaignDetailsProductReview /></ProtectedRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/campaign-details-video-review/:any/:any`} excat={true} element={<ProtectedRoutes><DynamicMeta /><CampaignDetailsVideoReview /></ProtectedRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/campaign-details-testimonial-review/:any/:any`} excat={true} element={<ProtectedRoutes><DynamicMeta /><CampaignDetailstestimonialReview /></ProtectedRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/campaign-details-sampling-review`} excat={true} element={<ProtectedRoutes><DynamicMeta /><CampaignDetailsSamplingReview /></ProtectedRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/campaign-details-servey-review`} excat={true} element={<ProtectedRoutes><DynamicMeta /><CampaignDetailsServeyReview /></ProtectedRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/campaign-details-influncer-outreach-review/:any/:any`} excat={true} element={<ProtectedRoutes><DynamicMeta /><CampaignDetailsInfluncerReview /></ProtectedRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/all-my-campaigns`} excat={true} element={<ProtectedRoutes><DynamicMeta /><BrandAnalysis /></ProtectedRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/all-my-revuers`} excat={true} element={<ProtectedRoutes><DynamicMeta /><RevuerParticipants /></ProtectedRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/influencer-outreach`} excat={true} element={<ProtectedRoutes><DynamicMeta /><BrandCampaignReport /></ProtectedRoutes>} />
            <Route path={`${process.env.REACT_APP_FRONT_URL}/ongoing-report`} excat={true} element={<ProtectedRoutes><DynamicMeta /><OngoingReport /></ProtectedRoutes>} />
            <Route path={`privacy-policy`} excat={true} element={<PrivacyPolicy />} />
            <Route path={`*`} excat={true} element={<NotFound />} />
        </Routes>
    );
}

export default App;
