import React, { Fragment ,Component } from 'react'
import {NavLink} from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import{ NavBarWrapper , NavBarCenter , NavBarLeft , NavBarRight , Span , NavSideList , SideItemWrapper , SideList } from './style'

class NavBar extends Component{
    constructor(props){
      super(props)
      this.state = {
        showSide:false, //是否显示左边栏
        stop:false,  //防止left多次点击
        fistIn:true //第一次进
      }
      this.handleLeftClick = this.handleLeftClick.bind(this)
    }
    //列表svg的点击
    async handleLeftClick(){
       if(!this.state.stop){
         this.state.stop = true
         await this.setState((prestate)=>(
          {
            showSide: !prestate.showSide ,
            stop:false,
            fistIn:false
          }
        ))
      }
    }
  render() {
    const {title,left,right,bgColor,fontColor,handleRightClick} = this.props
    return (
      <Fragment>
        <NavBarWrapper bgColor={bgColor} fontColor={fontColor}>
          <NavBarLeft>
            <svg onClick={this.handleLeftClick} className={left ? 'icon hidden':'icon'} t="1602578772145"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4459" width="1.1rem" height="1.1rem">
              <path d="M127 192c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64 0 35.346-28.654 64-64 64z m0 384c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64 0 35.346-28.654 64-64 64z m0 384c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64 0 35.346-28.654 64-64 64zM288 88h632c22.091 0 40 17.909 40 40s-17.909 40-40 40H288c-22.091 0-40-17.909-40-40s17.909-40 40-40z m0 384h632c22.091 0 40 17.909 40 40s-17.909 40-40 40H288c-22.091 0-40-17.909-40-40s17.909-40 40-40z m0 384h632c22.091 0 40 17.909 40 40s-17.909 40-40 40H288c-22.091 0-40-17.909-40-40s17.909-40 40-40z" p-id="4460" fill="#ffffff">
              </path>
            </svg>
           <Span className={left ? '':'hidden'}>{left}</Span>
          </NavBarLeft>
          <NavBarCenter>{title}</NavBarCenter>
          <NavBarRight>
          <a href='/#/record'>
            <svg className={right ? 'icon hidden':'icon'} t="1602578603970" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3396" width="1.1rem" height="1.1rem">
              <path d="M209.5 909.6v-40.9 16.2c0.8 13.8 12.2 24.7 26.2 24.7h-26.2zM632.9 718.7h40.9-16.2c-13.8 0.8-24.7 12.2-24.7 26.2v-26.2zM210.1 127.6H251h-16.2c-13.8 0.8-24.7 12.2-24.7 26.2v-26.2zM811.3 127.3v40.9V152c-0.8-13.8-12.2-24.7-26.2-24.7h26.2zM281.7 250.6c0-22.6 18.3-41 41-41h375.7c22.6 0 41 18.3 41 41 0 22.6-18.3 41-41 41H322.6c-22.6-0.1-40.9-18.4-40.9-41zM281.7 429.8c0-22.6 18.3-41 41-41h375.7c22.6 0 41 18.3 41 41 0 22.6-18.3 41-41 41H322.6c-22.6-0.1-40.9-18.4-40.9-41zM281.7 608.9c0-22.6 18.3-41 41-41h158.1c22.6 0 41 18.3 41 41 0 22.6-18.3 41-41 41H322.6c-22.6 0-40.9-18.4-40.9-41z" fill="#ffffff" p-id="3397"></path><path d="M852.1 637H616.3c-34.7 1.4-62.7 28.6-65.2 63v238.7c0 22.6 18.3 41 41 41 12.4 0 23.5-5.5 31-14.2l256.8-256.8c2.2-2.2 4.1-4.6 5.7-7.1 4.8-6.7 7.6-14.9 7.6-23.7-0.2-22.6-18.5-40.9-41.1-40.9zM633 839.6V718.9h120.8L633 839.6z" fill="#ffffff" p-id="3398"></path><path d="M829 45.7H188.5c-32.4 3.6-58 29.9-60.4 62.6v820.1c2.8 33.5 29.8 60.1 63.5 62.2h245.6c22.6 0 41-18.3 41-41 0-22.6-18.3-41-41-41H210.1v-781h600.8V675c0 22.6 18.3 41 41 41 22.6 0 41-18.3 41-41V106.3c-3.6-32.9-30.6-58.7-63.9-60.6z" fill="#ffffff" p-id="3399">
              </path>
            </svg>
          </a>
          <Span onClick={handleRightClick} className={right ? '':'hidden'}>{right}</Span>
          </NavBarRight>
        </NavBarWrapper>
        <CSSTransition
        in={this.state.showSide}
        timeout={300}
        classNames = 'slider'
        >
          <NavSideList className={this.state.fistIn ? 'hidden' : ''}>
            <SideList>
              <SideItemWrapper>
                <NavLink className='navLink' to='/home' >
                  首页
                </NavLink>
                  <svg t="1602914790225" className="right_arrow" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2481" width=".8rem" height=".8rem">
                    <path d="M857.70558 495.009024 397.943314 27.513634c-7.132444-7.251148-18.794042-7.350408-26.048259-0.216941-7.253194 7.132444-7.350408 18.795065-0.216941 26.048259l446.952518 454.470749L365.856525 960.591855c-7.192819 7.192819-7.192819 18.85544 0 26.048259 3.596921 3.596921 8.311293 5.39487 13.024641 5.39487s9.42772-1.798972 13.024641-5.39487L857.596086 520.949836C864.747973 513.797949 864.796068 502.219239 857.70558 495.009024z" p-id="2482" fill='#666'>
                    </path>
                  </svg>
              </SideItemWrapper>
              <SideItemWrapper>
                <NavLink className='navLink' to='/balance' >
                  提现
                </NavLink>            
                  <svg t="1602914790225" className="right_arrow" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2481" width=".8rem" height=".8rem">
                    <path d="M857.70558 495.009024 397.943314 27.513634c-7.132444-7.251148-18.794042-7.350408-26.048259-0.216941-7.253194 7.132444-7.350408 18.795065-0.216941 26.048259l446.952518 454.470749L365.856525 960.591855c-7.192819 7.192819-7.192819 18.85544 0 26.048259 3.596921 3.596921 8.311293 5.39487 13.024641 5.39487s9.42772-1.798972 13.024641-5.39487L857.596086 520.949836C864.747973 513.797949 864.796068 502.219239 857.70558 495.009024z" p-id="2482" fill='#666'>
                    </path>
                  </svg>
              </SideItemWrapper>
              <SideItemWrapper>
                <NavLink className='navLink' to='/help' >
                  帮助中心
                </NavLink>
                <svg t="1602914790225" className="right_arrow" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2481" width=".8rem" height=".8rem">
                  <path d="M857.70558 495.009024 397.943314 27.513634c-7.132444-7.251148-18.794042-7.350408-26.048259-0.216941-7.253194 7.132444-7.350408 18.795065-0.216941 26.048259l446.952518 454.470749L365.856525 960.591855c-7.192819 7.192819-7.192819 18.85544 0 26.048259 3.596921 3.596921 8.311293 5.39487 13.024641 5.39487s9.42772-1.798972 13.024641-5.39487L857.596086 520.949836C864.747973 513.797949 864.796068 502.219239 857.70558 495.009024z" p-id="2482" fill='#666'>
                  </path>
                </svg>
              </SideItemWrapper>
            </SideList>
          </NavSideList>
        </CSSTransition>
      </Fragment>
    )
  }
}
export default NavBar