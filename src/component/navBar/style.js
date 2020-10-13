import styled from 'styled-components'
const defaulteBgColor = '#975ec9'
const defaulteFontColor = '#fff'

export const NavBarWrapper = styled.section`
  display:flex;
  position:fixed;
  top:0;
  left:0;
  justify-content:center;
  align-items:center;
  width:100%;
  height:2.4rem;
  background-color:${props => props.defaulteBgColor ? props.bgColor : defaulteBgColor};
  color:${props => props.defaulteFontColor ? props.fontColor : defaulteFontColor};
  .icon{
    &.hidden{
      display:none;
    }
  }
`

export const NavBarCenter = styled.span`
  flex:1;
  font-size:1.05rem;
  text-align:center;
`

export const NavBarLeft = styled.div`
  padding: 0 .5rem;
`
export const NavBarRight = styled.div`
  padding: 0 .5rem;
`
