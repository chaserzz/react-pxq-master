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
export const A = styled.a.attrs({
  href:'/'
})`
  display:block;
  width:100%;
  height:4rem;
  background-color:#fff;
  color:#ccc;
  text-align:center;
  font-size:1.1rem;
  line-height:4rem;
  -webkit-tap-highlight-color:rgba(0,0,0,0);
`