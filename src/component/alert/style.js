import styled from 'styled-components'

export const AlertWrapper = styled.section`
  display:flex;
  position:fixed;
  top:0;
  left:0;
  z-index:9;
  height: ${props => props.height};
  width:100%;
  justify-content:space-between;
  align-items:center;
  background-color:rgba(0,0,0,.3);
  color:#333;
  font-size:1rem;
  &.hidden{
    display:none;
  }
`

export const AlertBox = styled.div`
  position:relative;
  width:78%;
  left:11%;
  border-radius:.5rem;
  background-color:#fff;
`

export const AlertContent = styled.span`
  display:block;
  width:100%;
  padding: 2.7rem 0 ;
  border-bottom: 2px solid #f5f5f5;
  text-align:center;
`

export const ConfirmDiv = styled.div.attrs({
  children:"确认"
})`  
  padding: .7rem 0;
  text-align: center;
`
