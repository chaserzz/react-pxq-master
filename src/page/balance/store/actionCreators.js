import { DRAW_BALANCE } from './constants'

export const drawBalance = (balance)=>{
  return {
    type:DRAW_BALANCE,
    value:balance
  }
}