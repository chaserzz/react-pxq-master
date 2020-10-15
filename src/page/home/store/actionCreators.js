import { INPUT_NAME , INPUT_PHONE , INPUT_PRICE , UPLOAD_IMG ,CLEAR_DATA } from './constants'

//获取客户名字
export const inputName = (name) =>{
  return {
    type:INPUT_NAME,
    value:name
  }
}
//获取客户电话
export const inputPhone= (phone) =>{
  return {
    type:INPUT_PHONE,
    value:phone
  }
}
//获取价格
export const inputPrice = (price) =>{
  return{ 
    type:INPUT_PRICE,
    value:price
  }
}

//存取图片
export const uploadImg = (url) =>{
  return {
    type:UPLOAD_IMG,
    value:url
  }
}

//清除数据
export const clearData = ()=>{
  return {
    type:CLEAR_DATA,
  }
}