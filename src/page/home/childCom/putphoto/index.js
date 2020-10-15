import React,{Fragment} from 'react'
import { Section ,Title ,Input,InpuyWrapper,Span,Image} from './style'

const PutPhoto = (props) => {
  return (
    <Fragment>
      <Section>
        <Title>请上传发票凭证</Title>
        <InpuyWrapper>
        <Span>上传图片</Span>
        <Input type='file' onChange={props.handleInputImg}/>
        </InpuyWrapper>
        <Image className={props.url === '' ? 'hidden' : ''}  src={'https:' + props.url}/>
      </Section>
    </Fragment>
  )
}

export default PutPhoto