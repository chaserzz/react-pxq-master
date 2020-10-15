import React,{Fragment} from 'react'
import {Button } from './style'

const BaseButton = (props) =>{
  const { marginTop , bgColor , fontColor , content , baseBtnClick} = props
  return (
    <Fragment>
      <Button onClick={baseBtnClick} marginTop={marginTop} bgColor={bgColor} fontColor={fontColor}>{content}</Button>
    </Fragment>
  )
}

export default BaseButton