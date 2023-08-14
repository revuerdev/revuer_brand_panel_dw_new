import { VIDEO_DURATION } from "../../data/constants"
import { takeLatest, put } from "redux-saga/effects"
import { setVideoDurationList } from "../../context/actions/videoduration";

//Video Duration List
function* getVideoDurationList(){
    let response = yield fetch(`${process.env.BRAND_API_URL}/brand/videoduration/get-video-duration-list`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Origin": process.env.ORIGIN_URL
		},
	});
	const Maindata = yield response.json();
	yield put(setVideoDurationList(Maindata));
}

export function* videoDurationSaga() {
    yield takeLatest(VIDEO_DURATION,getVideoDurationList); // Video Duration
}