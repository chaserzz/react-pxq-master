import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'

import Alert from '../../component/alert'
import NavBar from '../../component/navBar'
import BaseButton from '../../component/baseButton'

import {Container,Title,BalanceWrapper,BalanceTitle,BalanceInput,InputWaraper} from './style'

class Balance extends Component {
  constructor(props){
      super(props)
      this.state = {
        drawMoney:'',
        showAlert:false,
        AlertContent:''
      }
      this.handleInput = this.handleInput.bind(this)
      this.handleConfirmBtnClick = this.handleConfirmBtnClick.bind(this)
      this.clolseAlert = this.clolseAlert.bind(this)
    }
  //处理金额数据填入
  handleInput = (e)=>{
    let value = e.target.value
    //只能输入数字
    value=value.replace(/[^\d]/g,'')
    //只能输入一个0
    if(value === '00') {
      value = 0
    }
    //最大提取金额为200
    if(value >= 200){
      value = 200
    }
    this.setState(()=>({
      drawMoney:value
    }))
  }
  //提取按钮点击
  handleConfirmBtnClick(){
    let drawMoney = this.state.drawMoney - 0
    let balance = this.props.balance
    let remainder = balance - drawMoney
    if(drawMoney === 0){
      this.setState((preState)=>{
        const newState = preState
        newState.AlertContent = '请输入提现金额'
        newState.showAlert = true
        return newState
      })
      return
    }
    if(remainder < 0 ){
      this.setState((preState)=>{
        const newState = preState
        newState.AlertContent = '申请提现金额不能大于余额'
        newState.showAlert = true
        return newState
      })
      return
    }
    this.props.drawBalance(drawMoney)
    this.setState((preState)=>{
      const newState = preState
      newState.AlertContent = '申请提现成功'
      newState.showAlert = true
      return newState
    })
  }
  //关闭提示窗口
  clolseAlert(){
    this.setState((preState)=>{
      const newState = preState
      newState.showAlert = false
      return newState
    })
  }
  render(){
    return (
      <Container>
      <NavBar title='提现' />
      <Title>您可提现的余额为￥{this.props.balance}</Title>
      <BalanceWrapper>
        <InputWaraper>
          <BalanceTitle / >
          <span>￥</span>
          <BalanceInput value={this.state.drawMoney} onChange={this.handleInput} />
        </InputWaraper> 
      </BalanceWrapper>
      <BaseButton content='提现' baseBtnClick={this.handleConfirmBtnClick} />
      <Alert showAlert={this.state.showAlert} alertContent={this.state.AlertContent} closeAlert={this.clolseAlert}/>
    </Container>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    balance:state.balance.balance 
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    drawBalance(money){
      dispatch(actionCreators.drawBalance(money))
    }
  }
}
export default connect (mapStateToProps,mapDispatchToProps) (Balance)