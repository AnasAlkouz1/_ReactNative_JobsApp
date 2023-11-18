
import  {combineReducers} from "redux"
import {legacy_createStore as createStore} from 'redux'
import  _JobsStore from "./_jobs"


const stores=combineReducers({
_jobs:_JobsStore,
});
const __stores = createStore(stores)
export default __stores

