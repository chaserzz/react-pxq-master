import React, { Fragment } from 'react'
import NavBar from '../../component/navBar'
import BaseButton from '../../component/baseButton'

import {Container,Title,BalanceWrapper,BalanceTitle,BalanceInput,InputWaraper} from './style'
const Balance  = (props) =>{
  return (
    <Fragment>
      <Container>
        <NavBar title='提现' />
        <Title>您可提现的余额为￥60</Title>
        <BalanceWrapper>
          <BalanceTitle / >
         <InputWaraper>
          <span>￥</span>
          <BalanceInput />
         </InputWaraper> 
        </BalanceWrapper>
        <BaseButton content='提现' />
      </Container>
    </Fragment>
  )
}

export default Balance