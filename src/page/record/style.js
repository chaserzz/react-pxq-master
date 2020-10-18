import styled from 'styled-components'

export const NavWrapper = styled.section`
  display:flex;
  position:relative;
  padding:.6rem 0;
  margin-top:2.4rem;
  color:#333;
  justify-content:center;
  align-items:center;
  background-color:#fff;
  .nav_link{
    display:inline-block;
    width:33.3%;
    height:1.5rem;
    border-right:1px solid #ccc;
    line-height:1.5rem;
    text-align:center;
    color:#333;
    :nth-child(3){
      border:none;
    }
  }
  
`
