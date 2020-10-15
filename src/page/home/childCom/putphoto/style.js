import styled from 'styled-components'
const TitleColor = '#975ec9'

export const Section = styled.section`
`
export const Title = styled.p`
  padding:.8rem;
  text-align:left;
  color: ${TitleColor};
  font-size:0.98rem;
`

export const InpuyWrapper = styled.div`
  position:relative;
  z-index:2;
  height:4rem;
  width:100%;
  background-color:#fff;
  color:#ccc;
  text-align:center;
  vertical-align:text-bottom;
  line-height:4rem;
`
export const Span = styled.span`
  font-size:1.1rem;
`


export const Input = styled.input.attrs({

})`
  position:absolute;
  left:0;
  top:0;
  height:100%;
  width:100%;
  opacity:0;
`

export const Image = styled.img`
  width:50%;
  margin-top:.3rem;
  margin-left:25%;
  &.hidden{
    display:none;
  }
`