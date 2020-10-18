import styled from 'styled-components'
const defaulteBgColor = '#975ec9'
const defaulteFontColor = '#fff'

export const NavBarWrapper = styled.section`
  display:flex;
  position:fixed;
  top:0;
  left:0;
  z-index:99;
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

export const Span = styled.span`
  display:block;
  padding: 0 .5rem;
`

export const NavSideList = styled.section`
  position:absolute;
  top:2.4rem;
  left:0;
  z-index:19;
  height:calc(100vh - 2.4rem);
  width:100%;
  background-color:#fff;
  &.hidden{
    display:none;
  }
  &.slider-enter{
    transform: translate3d(-100%, 0, 0);
  }

  &.slider-enter-active{
    transform: translate3d(0, 0, 0);
    transition: transform 300ms;
  }
  &.slider-exit{
    transform:translate3d(0,0,0)
  }
  &.slider-exit-active{
    transform:translate3d(-100%,0,0);
    transition:all 300ms;
  }
  &.slider-exit-done{
    display:none;
  }
`

export const SideList = styled.ul`
  padding: 0 .8rem;
  color:#333;
  font-size:.85rem;
`

export const SideItemWrapper = styled.li`
  position:relative;
  text-align:left;
  padding: .8rem .5rem;
  border-bottom: 1px solid #ddd;
  .right_arrow{
    position:absolute;
    right:0;
    top:50%;
    transform:translate(-50%);
  }
  .navLink{
    display:inline-block;
    width:100%;
  }
`
