import { INTEREST_LIST } from "../../data/constants"
import { takeLatest, put } from "redux-saga/effects"
import { setInterests } from "../../context/actions/interests";

//Interests List
function* getInterestsList(){
    let response = yield fetch(`${process.env.BRAND_API_URL}/brand/interests/get-interests-list`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Origin": process.env.ORIGIN_URL
		},
	});
	const Maindata = yield response.json();
	yield put(setInterests(Maindata));
}

export function* interestsSaga() {
    yield takeLatest(INTEREST_LIST,getInterestsList); // Interests List
}