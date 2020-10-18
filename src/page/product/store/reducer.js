import { INIT_LIST , ADD_NUM , SUB_NUM , CHANGE_STATUS , SAVE_LIST } from './constants'

const defaultState = {
  list:[],  //总产品
  currentProducts:[] //当前选择产品
}

export default (state = defaultState , action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case INIT_LIST: {
      newState.list = action.list
      return newState
    }
    case ADD_NUM: {
      newState.list[action.index].num++ 
      return newState
    }
    case SUB_NUM: {
      newState.list[action.index].num--
      return newState
    }
    case CHANGE_STATUS: {
      newState.list[action.index].chose = ! newState.list[action.index].chose
      return newState
    }
    case SAVE_LIST: {
      newState.currentProducts = action.list
      return newState
    }
    default: return state
  }
}
