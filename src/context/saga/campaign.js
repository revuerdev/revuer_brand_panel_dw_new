import { takeLatest, put } from "redux-saga/effects"
import { CAMPAIGN_TYPE, CAMPAIGN_CREATE, CAMPAIGN_LIST, BRAND_CAMPAIGN_CREATE, CAMPAIGN_DETAILS, BRAND_CAMPAIGN_UPDATE, DISPLAY_CAMPAIGN_DETAILS, ALL_REVIEW_CAMPAIGN_LIST, ALL_ACTIVE_CAMPAIGN_LIST, ALL_COMPLETED_CAMPAIGN_LIST, ALL_DECLINED_CAMPAIGN_LIST, CAMPAIGN_DELETE, CAMPAIGN_STATUS_CHANGE } from "../../data/constants"
import { setCampaignType, setCampaignCreate, setCampaignList, setBrandCampaignCreate, setCampaignDetails, setBrandCampaignUpdate, setDisplayCampaignDetails, setCampaignReviewListData, setCampaignActiveListData, setCampaignCompletedListData, setCampaignDeclinedListData, setBrandCampaignDelete, setBrandCampaignStatusChange } from "../../context/actions/campaign";
import { toast } from "react-toastify"

//Campaign Type
function* getCampaignType() {
	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/campaign/get-campaign-type`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Origin": process.env.ORIGIN_URL
		},
	});
	const Maindata = yield response.json();
	yield put(setCampaignType(Maindata));
}

//Campaign Create
function* campaignCreate({ data }) {
	const { bodyData, navigate, submitButton, toastId } = data
	submitButton.current.disabled = true
	submitButton.current.querySelector("i").style.display = "inline-block"
	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/campaign/create-campaign`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Origin": process.env.ORIGIN_URL
		},
		body: JSON.stringify(bodyData)
	});
	const Maindata = yield response.json();
	yield put(setCampaignCreate(Maindata));
	if (Maindata.status === "FAILURE") {
		if (!toast.isActive(toastId.current)) { toastId.current = toast.error(Maindata.message) }
		submitButton.current.disabled = false
		submitButton.current.querySelector("i").style.display = "none"
	} else if (Maindata.status === "SUCCESS") {
		toast.success(Maindata.message)
		navigate(`/revuer-brand/dashboard`, { replace: true });
		submitButton.current.disabled = false
		submitButton.current.querySelector("i").style.display = "none"
	} else {
		toast.error(Maindata.message)
		submitButton.current.disabled = false
		submitButton.current.querySelector("i").style.display = "none"
	}
}

//Campaign List
function* getCampaignList({ data }) {
	const { bodyData } = data
	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/campaign/get-campaign-list`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Origin": process.env.ORIGIN_URL
		},
		body: JSON.stringify(bodyData)
	});
	const Maindata = yield response.json();
	yield put(setCampaignList(Maindata));
}

//Brand Campaign Create
function* brandCampaignCreate({ data }) {
	const { bodyData, navigate, submitButton, toastId } = data
	submitButton.current.disabled = true
	submitButton.current.querySelector("i").style.display = "inline-block"
	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/campaign/create-campaign`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Origin": process.env.ORIGIN_URL
		},
		body: JSON.stringify(bodyData)
	});
	const Maindata = yield response.json();
	yield put(setBrandCampaignCreate(Maindata));
	if (Maindata.status === "FAILURE") {
		if (!toast.isActive(toastId.current)) { toastId.current = toast.error(Maindata.message) }
		submitButton.current.disabled = false
		submitButton.current.querySelector("i").style.display = "none"
	} else if (Maindata.status === "SUCCESS") {
		toast.success(Maindata.message)
		submitButton.current.disabled = false
		submitButton.current.querySelector("i").style.display = "none"
	} else {
		toast.error(Maindata.message)
		submitButton.current.disabled = false
		submitButton.current.querySelector("i").style.display = "none"
	}
}

function* getCampaignDetails({ data }) {
	const { bodyData, navigate } = data
	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/campaign/get-campaign-details`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Origin": process.env.ORIGIN_URL
		},
		body: JSON.stringify(bodyData)
	});
	const Maindata = yield response.json();
	
	if (Maindata.status === "FAILURE") {
		navigate(`/revuer-brand/dashboard`,{replace:true});
	} else if (Maindata.status === "SUCCESS") {
		yield put(setCampaignDetails(Maindata));
	} else {
		navigate(`/revuer-brand/dashboard`,{replace:true});
	}
}

//Brand Campaign Update
function* brandCampaignUpdate({ data }) {
	const { bodyData, submitButton, toastId } = data
	submitButton.current.disabled = true
	submitButton.current.querySelector("i").style.display = "inline-block"
	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/campaign/update-campaign`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Origin": process.env.ORIGIN_URL
		},
		body: JSON.stringify(bodyData)
	});
	const Maindata = yield response.json();
	yield put(setBrandCampaignUpdate(Maindata));
	if (Maindata.status === "FAILURE") {
		if (!toast.isActive(toastId.current)) { toastId.current = toast.error(Maindata.message) }
		submitButton.current.disabled = false
		submitButton.current.querySelector("i").style.display = "none"
	} else if (Maindata.status === "SUCCESS") {
		toast.success(Maindata.message)
		submitButton.current.disabled = false
		submitButton.current.querySelector("i").style.display = "none"
	} else {
		toast.error(Maindata.message)
		submitButton.current.disabled = false
		submitButton.current.querySelector("i").style.display = "none"
	}
}

//Display Campaign Details
function* getDisplayCampaignDetails({ data }) {
	const { bodyData, navigate } = data
	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/campaign/get-display-campaign-details`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Origin": process.env.ORIGIN_URL
		},
		body: JSON.stringify(bodyData)
	});
	const Maindata = yield response.json();
	
	if (Maindata.status === "FAILURE") {
		navigate(`/revuer-brand/dashboard`,{replace:true});
	} else if (Maindata.status === "SUCCESS") {
		yield put(setDisplayCampaignDetails(Maindata));
	} else {
		navigate(`/revuer-brand/dashboard`,{replace:true});
	}
}

//Get All Review Camplaing List
function* getAllReviewCampaignList({ data }) {
	const { bodyData } = data
	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/campaign/get-all-review-campaign-list`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Origin": process.env.ORIGIN_URL
		},
		body: JSON.stringify(bodyData)
	});
	const Maindata = yield response.json();
	console.log("Main Data : ",Maindata)
	yield put(setCampaignReviewListData(Maindata));
} 


//Get All Active Camplaing List
function* getAllActiveCampaignList({ data }) {
	const { bodyData } = data
	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/campaign/get-all-active-campaign-list`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Origin": process.env.ORIGIN_URL
		},
		body: JSON.stringify(bodyData)
	});
	const Maindata = yield response.json();
	console.log("Main Data : ",Maindata)
	yield put(setCampaignActiveListData(Maindata));
}

//Get All Completed Camplaing List
function* getAllCompletedCampaignList({ data }) {
	const { bodyData } = data
	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/campaign/get-all-completed-campaign-list`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Origin": process.env.ORIGIN_URL
		},
		body: JSON.stringify(bodyData)
	});
	const Maindata = yield response.json();
	console.log("Main Data : ",Maindata)
	yield put(setCampaignCompletedListData(Maindata));
}

//Get All Declined Camplaing List
function* getAllDeclinedCampaignList({ data }) {
	const { bodyData } = data
	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/campaign/get-all-declined-campaign-list`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Origin": process.env.ORIGIN_URL
		},
		body: JSON.stringify(bodyData)
	});
	const Maindata = yield response.json();
	console.log("Main Data : ",Maindata)
	yield put(setCampaignDeclinedListData(Maindata));
}

function* brandCampaignDelete({ data }) {
	const { bodyData } = data
	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/campaign/brand-campaign-delete`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Origin": process.env.ORIGIN_URL
		},
		body: JSON.stringify(bodyData)
	});
	const Maindata = yield response.json();
	yield put(setBrandCampaignDelete(Maindata));
	if (Maindata.status === "FAILURE") {
		toast.error(Maindata.message)
	} else if (Maindata.status === "SUCCESS") {
		toast.success(Maindata.message)
		bodyData.setButtonHide(true)
	} else {
		toast.error(Maindata.message)
	}
	
}

// Campaign Status Change
function* brandCampaignStatusChange({ data }) {
	const { bodyData } = data
	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/campaign/brand-campaign-status-change`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Origin": process.env.ORIGIN_URL
		},
		body: JSON.stringify(bodyData)
	});
	const Maindata = yield response.json();
	yield put(setBrandCampaignStatusChange(Maindata));
	if (Maindata.status === "FAILURE") {
		toast.error(Maindata.message)
	} else if (Maindata.status === "SUCCESS") {
		toast.success(Maindata.message)
		bodyData.setButtonHide(true)
	} else {
		toast.error(Maindata.message)
	}
}

export function* campaignSaga() {
	yield takeLatest(CAMPAIGN_TYPE, getCampaignType); //	Campaign Type
	yield takeLatest(CAMPAIGN_CREATE, campaignCreate); //	Campaign Create
	yield takeLatest(CAMPAIGN_LIST, getCampaignList); //	Campaign List
	yield takeLatest(BRAND_CAMPAIGN_CREATE, brandCampaignCreate); //	Brand Campaign Create
	yield takeLatest(CAMPAIGN_DETAILS, getCampaignDetails); //	Campaign Details
	yield takeLatest(BRAND_CAMPAIGN_UPDATE, brandCampaignUpdate); //	Brand Campaign Update
	yield takeLatest(DISPLAY_CAMPAIGN_DETAILS, getDisplayCampaignDetails); //	Display Campaign Details
	yield takeLatest(ALL_REVIEW_CAMPAIGN_LIST, getAllReviewCampaignList); //	Get All Review Camplaing List
	yield takeLatest(ALL_ACTIVE_CAMPAIGN_LIST, getAllActiveCampaignList); //	Get All Active Camplaing List
	yield takeLatest(ALL_COMPLETED_CAMPAIGN_LIST, getAllCompletedCampaignList); //	Get All Completed Camplaing List
	yield takeLatest(ALL_DECLINED_CAMPAIGN_LIST, getAllDeclinedCampaignList); //	Get All Declined Camplaing List
	yield takeLatest(CAMPAIGN_DELETE, brandCampaignDelete); //	Campaign Delete
	yield takeLatest(CAMPAIGN_STATUS_CHANGE, brandCampaignStatusChange); //	Campaign Status Change
}
