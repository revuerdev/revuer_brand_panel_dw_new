import { configureStore } from "@reduxjs/toolkit"
import userSaga from '../../context/saga';
import createSagaMiddleware from "redux-saga"
import root from "../reducers"
const sagaMiddleware = createSagaMiddleware()
const store = configureStore(
	{ 
		reducer: root, 
		middleware: () => [sagaMiddleware] 
	}
)
sagaMiddleware.run(userSaga)
export default store