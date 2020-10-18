import { INPUT_PRICE , INPUT_NAME , INPUT_PHONE , UPLOAD_IMG , CLEAR_DATA } from './constants'

const defaultState = {
  price:'',
  name:'',
  phone:'',
  url:''
}

export default (state = defaultState , action) => {
  switch (action.type) {
    case INPUT_PRICE:{
      const newState = JSON.parse(JSON.stringify(state))
      newState.price = action.value
      return newState
    }
    case INPUT_NAME:{
      const newState = JSON.parse(JSON.stringify(state))
      newState.name = action.value
      return newState
    }
    case INPUT_PHONE:{
      const newState = JSON.parse(JSON.stringify(state))
      newState.phone = action.value
      return newState
    }
    case UPLOAD_IMG:{
      const newState = JSON.parse(JSON.stringify(state))
      newState.url = action.value
      return newState
    }
    case CLEAR_DATA:{
      const newState = JSON.parse(JSON.stringify(state))
      newState.url = ''
      newState.price = ''
      newState.name = ''
      newState.phone = ''
      return newState
    }
    default: return state
  }
}