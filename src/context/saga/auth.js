import { BRAND_REGISTER, BRAND_CREATE_PASSWORD, BRAND_FORGOT_PASSWORD, BRAND_RESET_PASSWORD, BRAND_LOGIN, BRAND_RESEND_EMAIL } from "../../data/constants"
import { takeLatest, put } from "redux-saga/effects"
import { toast } from "react-toastify"
import { setRegister, setBrandCreatePassword, setBrandForgotPassword, setBrandResetPassword, setBrandLogin, setBrandResendEmail } from "../../context/actions/auth";

//Register
function* brandRegister({ data }) {
	const { bodyData, navigate, submitButton, toastId } = data
	submitButton.current.disabled = true
	submitButton.current.querySelector("i").style.display = "inline-block"
	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/auth/brand-register`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Origin": process.env.ORIGIN_URL
		},
		body: JSON.stringify(bodyData)
	});
	const Maindata = yield response.json();
	yield put(setRegister(Maindata));
	if (Maindata.status === "FAILURE") {
		if (!toast.isActive(toastId.current)) { toastId.current = toast.error(Maindata.message) }
		submitButton.current.disabled = false
		submitButton.current.querySelector("i").style.display = "none"
	} else if (Maindata.status === "SUCCESS") {
		toast.success("Account created successfully, Please check your inbox for verification link.")
		navigate(`/revuer-brand/email-verify`, { replace: true });
		submitButton.current.disabled = false
		submitButton.current.querySelector("i").style.display = "none"
	} else {
		toast.error(Maindata.message)
		submitButton.current.disabled = false
		submitButton.current.querySelector("i").style.display = "none"
	}
}

//Create Password
function* brandCreatePassword({ data }) {
	const { bodyData, submitButton, toastId } = data
	submitButton.current.disabled = true
	submitButton.current.querySelector("i").style.display = "inline-block"
	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/auth/create-password`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Origin": process.env.ORIGIN_URL
		},
		body: JSON.stringify(bodyData)
	});
	const Maindata = yield response.json();
	yield put(setBrandCreatePassword(Maindata));
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

//Forgot Password
function* brandForgotPassword({ data }) {
	const { bodyData, navigate, submitButton, toastId } = data
	submitButton.current.disabled = true
	submitButton.current.querySelector("i").style.display = "inline-block"
	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/auth/forgot-password`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Origin": process.env.ORIGIN_URL
		},
		body: JSON.stringify(bodyData)
	});
	const Maindata = yield response.json();
	yield put(setBrandForgotPassword(Maindata));
	if (Maindata.status === "FAILURE") {
		if (!toast.isActive(toastId.current)) { toastId.current = toast.error(Maindata.message) }
		submitButton.current.disabled = false
		submitButton.current.querySelector("i").style.display = "none"
	} else if (Maindata.status === "SUCCESS") {
		toast.success(Maindata.message)
		navigate(`/revuer-brand/email-verify`, { replace: true });
		submitButton.current.disabled = false
		submitButton.current.querySelector("i").style.display = "none"
	} else {
		toast.error(Maindata.message)
		submitButton.current.disabled = false
		submitButton.current.querySelector("i").style.display = "none"
	}
}

//Reset Password
function* brandResetPassword({ data }) {
	const { bodyData, submitButton, toastId } = data
	submitButton.current.disabled = true
	submitButton.current.querySelector("i").style.display = "inline-block"
	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/auth/reset-password`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Origin": process.env.ORIGIN_URL
		},
		body: JSON.stringify(bodyData)
	});
	const Maindata = yield response.json();
	yield put(setBrandResetPassword(Maindata));
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

//Login
function* brandLogin({ data }) {
	const { bodyData, navigate, submitButton, toastId } = data
	submitButton.current.disabled = true
	submitButton.current.querySelector("i").style.display = "inline-block"
	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/auth/login`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json"
		},
		body: JSON.stringify(bodyData)
	});
	const Maindata = yield response.json();
	yield put(setBrandLogin(Maindata));
	if (Maindata.status === "FAILURE") {
		if (!toast.isActive(toastId.current)) { toastId.current = toast.error(Maindata.message) }
		submitButton.current.disabled = false
		submitButton.current.querySelector("i").style.display = "none"
	} else if (Maindata.status === "SUCCESS") {
		localStorage.setItem('brandlogin', 1);
		localStorage.setItem('brandlogin_unique_token', Maindata.data.unique_token);
		localStorage.setItem('brandlogin_profile_status', Maindata.data.profile_status);
		localStorage.setItem('brandlogin_profile_camp_status', Maindata.data.profile_camp_status);
		toast.success("Brand successfully Login")
		navigate(`/revuer-brand/setup-brand-details`, { replace: true });
		submitButton.current.disabled = false
		submitButton.current.querySelector("i").style.display = "none"
	} else {
		toast.error(Maindata.message)
		submitButton.current.disabled = false
		submitButton.current.querySelector("i").style.display = "none"
	}
}

//Resend Email
function* brandResendEmail({ data }) {
	const { bodyData, navigate, submitButton, toastId } = data
	submitButton.current.disabled = true
	submitButton.current.querySelector("i").style.display = "inline-block"
	let response = yield fetch(`${process.env.BRAND_API_URL}/brand/auth/resend-email`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Origin": process.env.ORIGIN_URL
		},
		body: JSON.stringify(bodyData)
	});
	const Maindata = yield response.json();
	yield put(setBrandResendEmail(Maindata));
	if (Maindata.status === "FAILURE") {
		if (!toast.isActive(toastId.current)) { toastId.current = toast.error(Maindata.message) }
		submitButton.current.disabled = false
		submitButton.current.querySelector("i").style.display = "none"
	} else if (Maindata.status === "SUCCESS") {
		toast.success("Verification link successfully sent, Please check your inbox for verification link.")
		navigate(`/revuer-brand/email-verify`, { replace: true });
		submitButton.current.disabled = false
		submitButton.current.querySelector("i").style.display = "none"
	} else {
		toast.error(Maindata.message)
		submitButton.current.disabled = false
		submitButton.current.querySelector("i").style.display = "none"
	}
}

export function* authSaga() {
	yield takeLatest(BRAND_REGISTER, brandRegister); // Register
	yield takeLatest(BRAND_CREATE_PASSWORD, brandCreatePassword); // Create Password
	yield takeLatest(BRAND_FORGOT_PASSWORD, brandForgotPassword); // Forgot Password
	yield takeLatest(BRAND_RESET_PASSWORD, brandResetPassword); // Reset Password
	yield takeLatest(BRAND_LOGIN, brandLogin); // Login
	yield takeLatest(BRAND_RESEND_EMAIL, brandResendEmail); // Resend Email
}