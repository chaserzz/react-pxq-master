import { INIT_LIST , ADD_NUM , SUB_NUM , CHANGE_STATUS , SAVE_LIST } from './constants'

export const getInitList = (list)=>{
    return {
      type: INIT_LIST,
      list
    }
}

export const addProductNum = (index) =>{
  return {
    type: ADD_NUM,
    index
  }
}

export const subProductNum = (index) =>{
  return {
    type: SUB_NUM,
    index
  }
}

export const changeProduceChose = (index) =>{
  return {
    type: CHANGE_STATUS,
    index
  }
}

export const saveList = (list) => {
  return {
    type:SAVE_LIST,
    list
  }
}