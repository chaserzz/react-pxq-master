import React, { Fragment } from 'react'

import NavBar from '../../component/navBar'

import {HelpWrapper,Title,Content,Ul,Li} from './style'

const HelpCenter = (props) =>{
  return (
    <Fragment>
      <NavBar title='帮助中心' />
      <HelpWrapper>
        <Title>介绍</Title>
        <Content>本项目主要用于理解 react 和 redux 的编译方式，以及 react + redux 之间的配合方式</Content>
        <Title>技术要点</Title>
        <Ul>
          <Li>react:16.13.1</Li>
          <Li>react-redux:7.2.1</Li>
          <Li>react-router-dom:5.2.0</Li>
          <Li>redux:4.0.5</Li>
          <Li>styled-components:5.2.0</Li>
          <Li>axios:0.20.0</Li>
        </Ul>
      </HelpWrapper>
    </Fragment>
  )
}

export default HelpCenter