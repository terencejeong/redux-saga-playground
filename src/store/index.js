import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from '../reducers'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)


// glue between store and generator function (mySaga)
sagaMiddleware.run(mySaga)




