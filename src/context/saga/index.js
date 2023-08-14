import { all } from "redux-saga/effects"

import { authSaga } from "../saga/auth";
import { categorySaga } from "../saga/category";
import { campaignSaga } from "../saga/campaign";
import { brandSaga } from "../saga/brand";
import { revuerlimitSaga } from "../saga/revuerlimit";
import { interestsSaga } from "../saga/interests";
import { videoDurationSaga } from "../saga/videoduration";
import { revuerSaga } from "../saga/revuer";
import { taskSaga } from "../saga/task";
import { notificationSaga } from "../saga/notification";
import { analysisReport } from "../saga/analysis";


function* userSaga() {
	yield all([
		authSaga(),	// Auth Saga
		categorySaga(),	// Category Saga
		campaignSaga(),	//	Campaign Saga
		brandSaga(),	//	Brand Saga
		revuerlimitSaga(),	//	Revuer Limit Saga
		interestsSaga(),	//	Interests List Saga
		videoDurationSaga(),	//	Video Duration Saga
		revuerSaga(),	//	Revuer Saga
		taskSaga(),	//	Task Saga
		notificationSaga(),	//Notification Saga
		analysisReport()	//Analysis Report Saga
	]);
}
export default userSaga;