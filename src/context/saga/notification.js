import { takeLatest, put } from "redux-saga/effects"
import { GET_NOTIFICATION, GET_TOTAL_ACTION_COUNT } from "../../data/constants"
import { setNotificationData, setTotalActionCount } from "../../context/actions/notification";

//get Notification Data
function* getNotificationData({ data }) {
	const { bodyData } = data
	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/notification/get-notification-data-list`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Origin": process.env.ORIGIN_URL
		},
		body: JSON.stringify(bodyData)
	});
	const Maindata = yield response.json();
	yield put(setNotificationData(Maindata));
}

//get Total Action Count
function* getTotalActionCount({ data }) {
	const { bodyData } = data
	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/notification/get-total-action-count`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Origin": process.env.ORIGIN_URL
		},
		body: JSON.stringify(bodyData)
	});
	const Maindata = yield response.json();
	yield put(setTotalActionCount(Maindata));
}

export function* notificationSaga() {
	yield takeLatest(GET_NOTIFICATION, getNotificationData); //	get Notification Data
	yield takeLatest(GET_TOTAL_ACTION_COUNT, getTotalActionCount); //	get Total Action Count
}
