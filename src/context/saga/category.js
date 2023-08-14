import { CATEGORY_LIST } from "../../data/constants"
import { takeLatest, put } from "redux-saga/effects"
import { setCategoryList } from "../../context/actions/category";

//Category List
function* getCategoryList(){
    let response = yield fetch(`${process.env.BRAND_API_URL}/brand/category/get-category-list`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Origin": process.env.ORIGIN_URL
		},
	});
	const Maindata = yield response.json();
	yield put(setCategoryList(Maindata));
}

export function* categorySaga() {
    yield takeLatest(CATEGORY_LIST,getCategoryList); // Category List
}