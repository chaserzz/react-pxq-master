import React,{Fragment} from 'react'
import {Button } from './style'

const BaseButton = (props) =>{
  const {marginTop,bgColor,fontColor,content} = props
  return (
    <Fragment>
      <Button marginTop={marginTop} bgColor={bgColor} fontColor={fontColor}>{content}</Button>
    </Fragment>
  )
}

export default BaseButton