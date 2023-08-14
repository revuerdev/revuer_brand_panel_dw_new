import { takeLatest, put } from "redux-saga/effects"
import { INFLUENCER_TASK_DETAILS, TESTIMONIAL_TASK_DETAILS, VISUAL_TASK_DETAILS, REVUER_TASK_APPROVAL, FEEDBACK_MESSAGE_SUBMIT } from "../../data/constants"
import { setInfluencerTaskDetails, setTestimonialTaskDetails, setVisualTaskDetails, setRevuerTaskApproval, setFeedbackMessageSubmit } from "../../context/actions/task";
import { toast } from "react-toastify"

//Get Influencer Task Details
function* getInfluencerTaskDetails({ data }) {
	const { bodyData, navigate } = data
	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/task/get-influencer-task-details`, {
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
		yield put(setInfluencerTaskDetails(Maindata));
	} else {
		navigate(`/revuer-brand/dashboard`,{replace:true});
	}
}


//Get Testimonial Task Details
function* getTestimonialTaskDetails({ data }) {
	const { bodyData, navigate } = data
	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/task/get-testimonial-task-details`, {
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
		yield put(setTestimonialTaskDetails(Maindata));
	} else {
		navigate(`/revuer-brand/dashboard`,{replace:true});
	}
}


//Get Testimonial Task Details
function* getVisualTaskDetails({ data }) {
	const { bodyData, navigate } = data
	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/task/get-visual-task-details`, {
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
		yield put(setVisualTaskDetails(Maindata));
	} else {
		navigate(`/revuer-brand/dashboard`,{replace:true});
	}
}

//Revuer Task Approval
function* revuerTaskApproval({ data }) {
	const { bodyData, navigate } = data
	

	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/revuer/revuer-task-approval`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Origin": process.env.ORIGIN_URL
		},
		body: JSON.stringify(bodyData)

	});
	const Maindata = yield response.json();
		
	console.log(bodyData)
	yield put(setRevuerTaskApproval(Maindata));
	if (Maindata.status === "FAILURE") {
		toast.error(Maindata.message)
	} else if (Maindata.status === "SUCCESS") {
		console.log(Maindata)
		toast.success(Maindata.message)
		bodyData.setButtonHide(true)
	} else {
		toast.error(Maindata.message)
	}
}

function* feedbackMessageSubmit({ data }) {
	const { bodyData } = data
	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/revuer/feedback-message-submit`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Origin": process.env.ORIGIN_URL
		},
		body: JSON.stringify(bodyData)
	});
	const Maindata = yield response.json();
	yield put(setFeedbackMessageSubmit(Maindata));
	if (Maindata.status === "FAILURE") {
		toast.error(Maindata.message)
	} else if (Maindata.status === "SUCCESS") {
		toast.success(Maindata.message)
		bodyData.setButtonHide(true)
	} else {
		toast.error(Maindata.message)
	}
	
}

export function* taskSaga() {
	yield takeLatest(INFLUENCER_TASK_DETAILS, getInfluencerTaskDetails); //	Get Influencer Task Details
	yield takeLatest(TESTIMONIAL_TASK_DETAILS, getTestimonialTaskDetails); //	Get Testimonial Task Details
	yield takeLatest(VISUAL_TASK_DETAILS, getVisualTaskDetails); //	Get Visual Task Details
	yield takeLatest(REVUER_TASK_APPROVAL, revuerTaskApproval); //	Revuer Task Approval
	yield takeLatest(FEEDBACK_MESSAGE_SUBMIT, feedbackMessageSubmit); //	Revuer Task Approval
}