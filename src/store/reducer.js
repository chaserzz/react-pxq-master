import { combineReducers } from 'redux'

import { reducer as HomeReducer } from '../page/home/store'
import { reducer as ProductReducer } from '../page/product/store'
import { reducer as BalanceReducer } from '../page/balance/store'

const reducer = combineReducers({
  home: HomeReducer,
  balance: BalanceReducer,
  product: ProductReducer
})
export default reducer