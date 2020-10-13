import styled from 'styled-components'
const TitleColor = '#975ec9'

export const UserInfoWrapper = styled.section`
  margin-top:2.4rem;
`

export const Title = styled.p`
  padding:.8rem;
  text-align:left;
  color: ${TitleColor};
  font-size:0.98rem;
`

export const InputWrapprt = styled.div`
  width:100%;
  height:2.6rem;
  line-height:2.6rem;
  padding-left:.8rem;
  border-bottom:1px solid #f5f5f5;
  background-color:#fff;
`

export const InputTitle = styled.span `
  margin-right:1.26rem;
  text-align:left;
  font-size:.85rem;
  color:#555;
`

export const Input = styled.input.attrs({
  type:'text',
})`
  font-size:.8rem;
  ::placeholder{
    color:#ccc;
  }

`