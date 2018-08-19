import { call, put, take, throttle, select } from 'redux-saga/effects'
import * as TYPES from '../types'

const api = (url) => fetch(url).then(response => response.json())

export const fetchStarWarsRequest = () => ({
    type: TYPES.FETCH_STAR_WARS_REQUEST
})

export const confirmFetchRequest = () => ({
    type: TYPES.CONFIRMATION
})

export const fetchStarWarsPlanetRequest = () => ({
    type: TYPES.FETCH_STAR_WARS_PLANET_REQUEST
})

// export function* handleInput(input) {

// }

// export function* watchInput() {
//     //throttle has 3 parameters.
//     // 1) the time, 2) the pattern or/ type of dispatch action creator. 3) a generator function
//     // Saying that once input has changed, we will not spawn a new handleInput saga until that time has been satisfied. 
//     yield throttle(500, 'INPUT_CHANGED', handleInput)

// }

// generator functions. 
export function* fetchPerson(action) {
    try {
        // const selector = yield select(state => state.starWars)
        // console.log(selector)
        // console.log('entered')
        yield take(TYPES.CONFIRMATION)
        console.log('passed confirmation')
        const person = yield call(api, 'https://swapi.co/api/people/')

          // the put is like Redux 'dispatch' method. 
        yield put({type: TYPES.FETCH_STAR_WARS_SUCCESS, data: person.results})

    } catch (e) {
        console.log(e)
    }
}

export function* fetchPlanets(action) {
    try {
        const planets = yield call(api, 'https://swapi.co/api/planets/')

        // the put is like Redux 'dispatch' method. 
        yield put({ type: TYPES.FETCH_STAR_WARS_PLANET_SUCCESS, data: planets.results })

    } catch (e) {
        console.log(e)
    }
}