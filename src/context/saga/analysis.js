import { BRAND_ANALYSIS_REPORT, REVUER_PARTICIPANTS_REPORT, GET_BRAND_CAMPIGN_REPORT, GET_CAMPAIGN_NAMES, GET_ONGOING_CAMPAIGN_NAMES, REVUER_ONGOING_REPORT, GET_ONGOING_CAMPAIGN_NAMES_IO } from "../../data/constants"
import { takeLatest, put } from "redux-saga/effects"
import { toast } from "react-toastify"
import { setBrandAnalysisReport, setRevuerParticipantsReport, setCampaignNames, setBrandCampaignReport, setOngoingCampaignNames, setRevuerOngoingReport, setCampignNamesDataIo } from "../../context/actions/analysis";

//Analysis Report
function* analysisReportData({ data }) {
    const { bodyData, submitButton, toastId } = data
    submitButton.current.disabled = true
    submitButton.current.querySelector("i").style.display = "inline-block"
    let response = yield fetch(`${process.env.BRAND_API_URL}/brand/analysis/get-analysis-campaign`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Origin": process.env.ORIGIN_URL
        },
        body: JSON.stringify(bodyData)
    });
    const Maindata = yield response.json();
    yield put(setBrandAnalysisReport(Maindata));
    if (Maindata.status === "FAILURE") {
        if (!toast.isActive(toastId.current)) { toastId.current = toast.error(Maindata.message) }
        submitButton.current.disabled = false
        submitButton.current.querySelector("i").style.display = "none"
    } else if (Maindata.status === "SUCCESS") {
        // toast.success(Maindata.message)
        submitButton.current.disabled = false
        submitButton.current.querySelector("i").style.display = "none"
    } else {
        toast.error(Maindata.message)
        submitButton.current.disabled = false
        submitButton.current.querySelector("i").style.display = "none"
    }
}
function* revuerParticipantsReport({ data }) {
    const { bodyData, submitButton, toastId } = data
    submitButton.current.disabled = true
    submitButton.current.querySelector("i").style.display = "inline-block"
    let response = yield fetch(`${process.env.BRAND_API_URL}/brand/analysis/get-participated-revuer-campaign`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Origin": process.env.ORIGIN_URL
        },
        body: JSON.stringify(bodyData)
    });
    const Maindata = yield response.json();
    yield put(setRevuerParticipantsReport(Maindata));
    if (Maindata.status === "FAILURE") {
        if (!toast.isActive(toastId.current)) { toastId.current = toast.error(Maindata.message) }
        submitButton.current.disabled = false
        submitButton.current.querySelector("i").style.display = "none"
    } else if (Maindata.status === "SUCCESS") {
        // toast.success(Maindata.message)
        submitButton.current.disabled = false
        submitButton.current.querySelector("i").style.display = "none"
    } else {
        toast.error(Maindata.message)
        submitButton.current.disabled = false
        submitButton.current.querySelector("i").style.display = "none"
    }
}
function* revuerOngoingReport({ data }) {
    const { bodyData, submitButton, toastId } = data
    submitButton.current.disabled = true
    submitButton.current.querySelector("i").style.display = "inline-block"
    let response = yield fetch(`${process.env.BRAND_API_URL}/brand/analysis/get-ongoing-revuer-campaign`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Origin": process.env.ORIGIN_URL
        },
        body: JSON.stringify(bodyData)
    });
    const Maindata = yield response.json();
    yield put(setRevuerOngoingReport(Maindata));
    if (Maindata.status === "FAILURE") {
        if (!toast.isActive(toastId.current)) { toastId.current = toast.error(Maindata.message) }
        submitButton.current.disabled = false
        submitButton.current.querySelector("i").style.display = "none"
    } else if (Maindata.status === "SUCCESS") {
        // toast.success(Maindata.message)
        submitButton.current.disabled = false
        submitButton.current.querySelector("i").style.display = "none"
    } else {
        toast.error(Maindata.message)
        submitButton.current.disabled = false
        submitButton.current.querySelector("i").style.display = "none"
    }
}
function* getCampaignNames({ data }) {
    const { bodyData } = data
    let response = yield fetch(`${process.env.BRAND_API_URL}/brand/analysis/get-campaign-names`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Origin": process.env.ORIGIN_URL
        },
        body: JSON.stringify(bodyData)
    });
    const Maindata = yield response.json();
    yield put(setCampaignNames(Maindata));
}
function* getCampaignNamesIo({ data }) {
    const { bodyData } = data
    let response = yield fetch(`${process.env.BRAND_API_URL}/brand/analysis/get-brand-campaign`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Origin": process.env.ORIGIN_URL
        },
        body: JSON.stringify(bodyData)
    });
    const Maindata = yield response.json();
    yield put(setCampignNamesDataIo(Maindata));
}
function* getOngoinfCampaignNames({ data }) {
    const { bodyData } = data
    let response = yield fetch(`${process.env.BRAND_API_URL}/brand/analysis/get-ongoing-campaign`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Origin": process.env.ORIGIN_URL
        },
        body: JSON.stringify(bodyData)
    });
    const Maindata = yield response.json();
    yield put(setOngoingCampaignNames(Maindata));
}
function* getBrandCampaignReport({ data }) {
    const { bodyData } = data
    let response = yield fetch(`${process.env.BRAND_API_URL}/brand/analysis/get-analysis-data`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Origin": process.env.ORIGIN_URL
        },
        body: JSON.stringify(bodyData)
    });
    const Maindata = yield response.json();
    yield put(setBrandCampaignReport(Maindata));
}


export function* analysisReport() {
    yield takeLatest(BRAND_ANALYSIS_REPORT, analysisReportData); // Analysis Brand Data
    yield takeLatest(GET_CAMPAIGN_NAMES, getCampaignNames); // Analysis Brand Data
    yield takeLatest(REVUER_PARTICIPANTS_REPORT, revuerParticipantsReport); // Analysis Brand Data
    yield takeLatest(GET_BRAND_CAMPIGN_REPORT, getBrandCampaignReport); // Brand Campign Report Data
    yield takeLatest(GET_ONGOING_CAMPAIGN_NAMES, getOngoinfCampaignNames); // Brand Campign Report Data
    yield takeLatest(REVUER_ONGOING_REPORT, revuerOngoingReport); // Brand Campign Report Data
    yield takeLatest(GET_ONGOING_CAMPAIGN_NAMES_IO, getCampaignNamesIo); // Brand Campign Report Data
}