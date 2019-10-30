import { createStore } from 'redux'
import mainReducer from '../reducers'

const store = createStore(mainReducer)

export const dispatch = store.dispatch

export default store
