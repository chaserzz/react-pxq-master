// import {combineReducers} from 'redux-immutable'
// import { reducer as HomeReducer} from '../page/home/store'
// export default combineReducers({
//   home:HomeReducer,
// })

import { combineReducers } from 'redux'

import {reducer as HomeReducer} from '../page/home/store'

const reducer = combineReducers({
  home:HomeReducer

})
export default reducer