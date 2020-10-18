import { DRAW_BALANCE } from './constants'

const defaultState = {
  balance:150
}

export default (state = defaultState , action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case DRAW_BALANCE:{
      newState.balance = newState.balance - action.value
      return newState
    }
    default: return state
  }
}