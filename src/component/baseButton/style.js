import styled from 'styled-components'
const defaultColor = '#975ec9'
const fontColor = '#fff'
export const Button  = styled.button`
  height:2.5rem;
  width:90%;
  margin-top:${props => props.marginTop ? props.marginTop : '1.5rem'};
  margin-left:5%;
  border-radius:.3rem;
  background-color:${props => props.bgColor ? props.bgColor : defaultColor};
  line-height:2.5rem;
  text-align:center;
  font-size: 1rem;
  color:${props => props.fontColor ? props.fontColor : fontColor};
`