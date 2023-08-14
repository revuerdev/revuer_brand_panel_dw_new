import { takeLatest, put } from "redux-saga/effects"
import { REVUER_PENDING_APPROVAL, REVUER_ACCEPTED_LIST, REVUER_ALL_TASK_LIST, REVUER_COMPLETED_TASK_LIST, REVUER_PARTICIPATION_APPROVAL, REVUER_PENDING_TASK_LIST } from "../../data/constants"
import { setRevuerPendingApproval, setRevuerAccepted, setRevuerAllTask, setRevuerCompletedTask, setRevuerParticipationApproval, setRevuerPendingTask } from "../../context/actions/revuer";
import { toast } from "react-toastify"

//Get Revuer Pending and Approval List
function* getRevuerPendingApprovalList({ data }) {
	console.log("Saga")
	const { bodyData } = data
	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/revuer/get-revuer-pending-approval-list`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Origin": process.env.ORIGIN_URL
		},
		body: JSON.stringify(bodyData)
	});
	const Maindata = yield response.json();
	yield put(setRevuerPendingApproval(Maindata));
}

//Get Revuer Pending and Approval List
function* getRevuerAcceptedList({ data }) {
	const { bodyData } = data
	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/revuer/get-revuer-accepted-list`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Origin": process.env.ORIGIN_URL
		},
		body: JSON.stringify(bodyData)
	});
	const Maindata = yield response.json();
	yield put(setRevuerAccepted(Maindata));
}

//Get Revuer All Task List
function* getRevuerAllTaskList({ data }) {
	const { bodyData } = data
	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/revuer/get-revuer-all-task-list`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Origin": process.env.ORIGIN_URL
		},
		body: JSON.stringify(bodyData)
	});
	const Maindata = yield response.json();
	yield put(setRevuerAllTask(Maindata));
}

//Get Revuer Completed Task List
function* getRevuerCompletedTaskList({ data }) {
	const { bodyData } = data
	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/revuer/get-revuer-completed-task-list`, {
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


	yield put(setRevuerCompletedTask(Maindata));
}

//Get Revuer Pending and Approval List
function* revuerParticipationApproval({ data }) {
	const { bodyData, navigate } = data
	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/revuer/revuer-participation-approval`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Origin": process.env.ORIGIN_URL
		},
		body: JSON.stringify(bodyData)
	});
	const Maindata = yield response.json();
	yield put(setRevuerParticipationApproval(Maindata));
	if (Maindata.status === "FAILURE") {
		toast.error(Maindata.message)
	} else if (Maindata.status === "SUCCESS") {
		toast.success(Maindata.message)
		bodyData.setButtonHide(true)
		// navigate(`${process.env.REACT_APP_FRONT_URL}/campaign-menegment-active-request/${bodyData.campaign_token}`, { replace: true });
	} else {
		toast.error(Maindata.message)
	}
}

//Get Revuer Pending Task List
function* getRevuerPendingTaskList({ data }) {
	const { bodyData } = data
	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/revuer/get-revuer-pending-task-list`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Origin": process.env.ORIGIN_URL
		},
		body: JSON.stringify(bodyData)
	});
	const Maindata = yield response.json();
	yield put(setRevuerPendingTask(Maindata));
}

export function* revuerSaga() {
	yield takeLatest(REVUER_PENDING_APPROVAL, getRevuerPendingApprovalList); //	Revuer Pending and Approval List
	yield takeLatest(REVUER_ACCEPTED_LIST, getRevuerAcceptedList); //	Revuer Accepted List
	yield takeLatest(REVUER_ALL_TASK_LIST, getRevuerAllTaskList); //	Revuer All Task List
	yield takeLatest(REVUER_PENDING_TASK_LIST, getRevuerPendingTaskList); //	Revuer Pending Task List
	yield takeLatest(REVUER_COMPLETED_TASK_LIST, getRevuerCompletedTaskList); //	Revuer Completed Task List
	yield takeLatest(REVUER_PARTICIPATION_APPROVAL, revuerParticipationApproval); //	Revuer Participation Approval
}