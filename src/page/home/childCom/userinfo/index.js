import React, { Fragment } from 'react'
import {UserInfoWrapper,Title,InputWrapprt,InputTitle,Input} from './style'

const UserInfo = (props)=>{
  return (
    <Fragment>
      <UserInfoWrapper>
        <Title>请录入您的信息</Title>
      </UserInfoWrapper>
      <form>
        <InputWrapprt>
          <InputTitle>销售金额:</InputTitle>
          <Input placeholder="请输入订单金额"/>
        </InputWrapprt>
        <InputWrapprt>
          <InputTitle>客户姓名:</InputTitle>
          <Input placeholder="请输入客户姓名"/>
        </InputWrapprt>
        <InputWrapprt>
          <InputTitle>客户电话:</InputTitle>
          <Input placeholder="请输入客户电话"/>
        </InputWrapprt>
      </form>
    </Fragment>
  )
}

export default UserInfo