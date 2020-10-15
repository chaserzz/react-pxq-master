import React, { Fragment } from 'react'
import{NavBarWrapper,NavBarCenter,NavBarLeft,NavBarRight,Span} from './style'
const NavBar = (props) => {
  const {title,left,right,bgColor,fontColor} = props
  return (
    <Fragment>
      <NavBarWrapper bgColor={bgColor} fontColor={fontColor}>
        <NavBarLeft>
          <svg className={left ? 'icon hidden':'icon'} t="1602578772145"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4459" width="1.1rem" height="1.1rem">
            <path d="M127 192c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64 0 35.346-28.654 64-64 64z m0 384c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64 0 35.346-28.654 64-64 64z m0 384c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64 0 35.346-28.654 64-64 64zM288 88h632c22.091 0 40 17.909 40 40s-17.909 40-40 40H288c-22.091 0-40-17.909-40-40s17.909-40 40-40z m0 384h632c22.091 0 40 17.909 40 40s-17.909 40-40 40H288c-22.091 0-40-17.909-40-40s17.909-40 40-40z m0 384h632c22.091 0 40 17.909 40 40s-17.909 40-40 40H288c-22.091 0-40-17.909-40-40s17.909-40 40-40z" p-id="4460" fill="#ffffff">
            </path>
          </svg>
         <Span className={left ? '':'hidden'}>{left}</Span>
        </NavBarLeft>
        <NavBarCenter>{title}</NavBarCenter>
        <NavBarRight>
        <svg  className={right ? 'icon hidden':'icon'} t="1602578603970" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3396" width="1.1rem" height="1.1rem">
          <path d="M209.5 909.6v-40.9 16.2c0.8 13.8 12.2 24.7 26.2 24.7h-26.2zM632.9 718.7h40.9-16.2c-13.8 0.8-24.7 12.2-24.7 26.2v-26.2zM210.1 127.6H251h-16.2c-13.8 0.8-24.7 12.2-24.7 26.2v-26.2zM811.3 127.3v40.9V152c-0.8-13.8-12.2-24.7-26.2-24.7h26.2zM281.7 250.6c0-22.6 18.3-41 41-41h375.7c22.6 0 41 18.3 41 41 0 22.6-18.3 41-41 41H322.6c-22.6-0.1-40.9-18.4-40.9-41zM281.7 429.8c0-22.6 18.3-41 41-41h375.7c22.6 0 41 18.3 41 41 0 22.6-18.3 41-41 41H322.6c-22.6-0.1-40.9-18.4-40.9-41zM281.7 608.9c0-22.6 18.3-41 41-41h158.1c22.6 0 41 18.3 41 41 0 22.6-18.3 41-41 41H322.6c-22.6 0-40.9-18.4-40.9-41z" fill="#ffffff" p-id="3397"></path><path d="M852.1 637H616.3c-34.7 1.4-62.7 28.6-65.2 63v238.7c0 22.6 18.3 41 41 41 12.4 0 23.5-5.5 31-14.2l256.8-256.8c2.2-2.2 4.1-4.6 5.7-7.1 4.8-6.7 7.6-14.9 7.6-23.7-0.2-22.6-18.5-40.9-41.1-40.9zM633 839.6V718.9h120.8L633 839.6z" fill="#ffffff" p-id="3398"></path><path d="M829 45.7H188.5c-32.4 3.6-58 29.9-60.4 62.6v820.1c2.8 33.5 29.8 60.1 63.5 62.2h245.6c22.6 0 41-18.3 41-41 0-22.6-18.3-41-41-41H210.1v-781h600.8V675c0 22.6 18.3 41 41 41 22.6 0 41-18.3 41-41V106.3c-3.6-32.9-30.6-58.7-63.9-60.6z" fill="#ffffff" p-id="3399">
          </path>
        </svg>
        <Span className={right ? '':'hidden'}>{right}</Span>
        </NavBarRight>
      </NavBarWrapper>
    </Fragment>
  )
}

export default NavBar