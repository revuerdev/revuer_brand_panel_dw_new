import { BRAND_UPDATE, BRAND_DETAILS, BRAND_PROFILE_UPDATE, BRAND_EMAIL_OTP_SEND, BRAND_SOCIAL_DATA_UPDATE } from "../../data/constants"
import { takeLatest, put } from "redux-saga/effects"
import { toast } from "react-toastify"
import { setBrandDetails, setBrandUpdate, setBrandProfileDataUpdate, setBrandProfileEmailOtp } from "../../context/actions/brand";

//Brand Update
function* brandUpdate({ data }) {

	const { bodyData, navigate, submitButton, toastId } = data
	submitButton.current.disabled = true
	submitButton.current.querySelector("i").style.display = "inline-block"
	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/brands/brand-update`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Origin": process.env.ORIGIN_URL
		},
		body: JSON.stringify(bodyData)
	});
	const Maindata = yield response.json();
	yield put(setBrandUpdate(Maindata));
	if (Maindata.status === "FAILURE") {
		if (!toast.isActive(toastId.current)) { toastId.current = toast.error(Maindata.message) }
		submitButton.current.disabled = false
		submitButton.current.querySelector("i").style.display = "none"
	} else if (Maindata.status === "SUCCESS") {
		toast.success(Maindata.message)
		navigate(`/revuer-brand/setup-user-details`, { replace: true });
		submitButton.current.disabled = false
		submitButton.current.querySelector("i").style.display = "none"
	} else {
		toast.error(Maindata.message)
		submitButton.current.disabled = false
		submitButton.current.querySelector("i").style.display = "none"
	}
}

//Brand Details
function* brandDetails({ data }) {
	const { bodyData } = data
	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/brands/get-brand-details`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Origin": process.env.ORIGIN_URL
		},
		body: JSON.stringify(bodyData)
	});
	const Maindata = yield response.json();
	yield put(setBrandDetails(Maindata));
}


//Brand Profile Update
function* brandProfileUpdate({ data }) {
	const { bodyData } = data
	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/brands/brand-profile-update`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Origin": process.env.ORIGIN_URL
		},
		body: JSON.stringify(bodyData)
	});
	const Maindata = yield response.json();
	yield put(setBrandProfileDataUpdate(Maindata));
	if (Maindata.status === "FAILURE") {
		toast.error(Maindata.message)
	} else if (Maindata.status === "SUCCESS") {
		toast.success(Maindata.message)
		setTimeout(function () {
			window.location.reload(1);
		}, 2000);
	} else {
		toast.error(Maindata.message)
	}
}

//Brand Social Update
function* brandSocialUpdate({ data }) {
	const { bodyData } = data
	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/brands/update-social-handles`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Origin": process.env.ORIGIN_URL
		},
		body: JSON.stringify(bodyData)
	});
	const Maindata = yield response.json();
	console.log("Maindata", Maindata)
	if (Maindata.status === "FAILURE") {
		toast.error(Maindata.message)
	} else if (Maindata.status === "SUCCESS") {
		toast.success(Maindata.message)
		setTimeout(function () {
			window.location.reload(1);
		}, 2000);
	} else {
		toast.error(Maindata.message)
	}
}

// Brand Email OTP Send
function* brandEmailOtpSend({ data }) {
	const { bodyData } = data
	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/brands/brand-profile-email-otp-send`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Origin": process.env.ORIGIN_URL
		},
		body: JSON.stringify(bodyData)
	});
	const Maindata = yield response.json();
	yield put(setBrandProfileEmailOtp(Maindata));
	if (Maindata.status === "FAILURE") {
		toast.error(Maindata.message)
	} else if (Maindata.status === "SUCCESS") {
		toast.success(Maindata.data.message)
		localStorage.setItem('old_email_otp', Maindata.data.old_email_otp);
		localStorage.setItem('new_email_otp', Maindata.data.new_email_otp);
		localStorage.setItem('change_new_email', Maindata.data.new_email);
	} else {
		toast.error(Maindata.message)
	}
}

export function* brandSaga() {
	yield takeLatest(BRAND_UPDATE, brandUpdate); // Brand Update
	yield takeLatest(BRAND_DETAILS, brandDetails); // Brand Details
	yield takeLatest(BRAND_PROFILE_UPDATE, brandProfileUpdate); // Brand Profile Update
	yield takeLatest(BRAND_EMAIL_OTP_SEND, brandEmailOtpSend); // Brand Email OTP Send
	yield takeLatest(BRAND_SOCIAL_DATA_UPDATE, brandSocialUpdate); // Brand Email OTP Send
}