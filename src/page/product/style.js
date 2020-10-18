import styled from 'styled-components'

const heightColor = '#975ec9'

export const ProductList = styled.ul`
  margin-top:2.9rem;
  background-color:#fff;
`

export const ProductItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 1rem .8rem; 
  color: #333;
  font-size: .95rem;
`

export const LeftWrapper = styled.p`
  display:flex;
  justify-content:space-between;
  .chose{
   path{
     fill:${heightColor};
   }
  }
`

export const ProductName = styled.span`
  margin-left:.4rem;
  text-align:right;
`

export const RightWrapper = styled.p`
  display:flex;
  justify-content: space-around;
  align-items:center;
  .enable{
    fill:${heightColor}
  }
`

export const NumWrapper = styled.span`
  display: block;
  flex: 1;
  margin: 0 .4rem;
  font-size: .9rem;
  text-align: center;
`