import styled from 'styled-components'
export const Container = styled.section`
  width:100%;
  padding-top:2.4rem;
`

export const Title  = styled.p`
  padding:.8rem;
  font-size:.9rem;
  color:#999;
`

export const BalanceWrapper = styled.section`
  display:flex;
  height:6rem;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  background-color:#fff;
  color:#333;
  text-align:center;
`

export const BalanceTitle = styled.p.attrs({
  children:"请输入提现金额(元)"
})`
  font-size:1rem;  
`
export const InputWaraper = styled.p`
    padding:.6rem 0 ;
`


export const BalanceInput = styled.input.attrs({
  placeholder:'0.00'
})`
  width:3.4rem;
  font-size:1rem;
  ::placeholder{
    color:#ccc;  
  }
  ::before{
    content:"￥";
    display:inline;
    
  }
`