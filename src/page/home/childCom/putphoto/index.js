import React,{Fragment} from 'react'
import { Section ,Title ,Input,InpuyWrapper,Span} from './style'

const PutPhoto = (props) => {
  return (
    <Fragment>
      <Section>
        <Title>请上传发票凭证</Title>
        <InpuyWrapper>
        <Span>上传图片</Span>
        <Input type='file' />
        </InpuyWrapper>
      </Section>
    </Fragment>
  )
}

export default PutPhoto