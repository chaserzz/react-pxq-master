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
  href:'/#/product'
})`
  display:flex;
  width:100%;
  background-color:#fff;
  align-items:center;
  flex-wrap: wrap;
  justify-content:space-between;
  color:#ccc;
  text-align:center;

  font-size:1.1rem;
  -webkit-tap-highlight-color:rgba(0,0,0,0);
`

export const Span = styled.span`
  flex:1;
  line-height:4rem;
`

export const ProductItem = styled.span`
  display:block;
  flex:1;
  width:40%;
  padding:.5rem 9%;
  font-size:.8rem;
  color:#333;
  text-align:center;
  white-space:nowrap;
`