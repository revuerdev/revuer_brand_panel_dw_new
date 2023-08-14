import { REVUER_LIMIT_LIST } from "../../data/constants"
import { takeLatest, put } from "redux-saga/effects"
import { setRevuerLimit } from "../../context/actions/revuerlimit";

//Revuer Limit List
function* getRevuerLimitList(){
    let response = yield fetch(`${process.env.BRAND_API_URL}/brand/revuer/get-revuer-limit-list`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Origin": process.env.ORIGIN_URL
		},
	});
	const Maindata = yield response.json();
	yield put(setRevuerLimit(Maindata));
}

export function* revuerlimitSaga() {
    yield takeLatest(REVUER_LIMIT_LIST,getRevuerLimitList); // Revuer Limit List
}