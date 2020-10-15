import React, { Fragment } from 'react'
import {UserInfoWrapper,Title,InputWrapprt,InputTitle,Input} from './style'

const UserInfo = (props)=>{
  const { price , name , phone , handlePriceChange ,handleNameChange , handlePhoneChange }  = props
  return (
    <Fragment>
      <UserInfoWrapper>
        <Title>请录入您的信息</Title>
      </UserInfoWrapper>
      <form>
        <InputWrapprt>
          <InputTitle>销售金额:</InputTitle>
          <Input value={price} placeholder="请输入订单金额" onChange={handlePriceChange} />
        </InputWrapprt>
        <InputWrapprt>
          <InputTitle>客户姓名:</InputTitle>
          <Input value={name} placeholder="请输入客户姓名" onChange={handleNameChange} />
        </InputWrapprt>
        <InputWrapprt>
          <InputTitle>客户电话:</InputTitle>
          <Input value={phone} placeholder="请输入客户电话" onChange={handlePhoneChange} />
        </InputWrapprt>
      </form>
    </Fragment>
  )
}

export default UserInfo