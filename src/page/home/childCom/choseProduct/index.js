import React,{Fragment} from 'react'
import { Section ,Title,A } from './style'

const ChoseProducts = (props) => {
  return (
    <Fragment>
      <Section>
        <Title>请选择销售的产品</Title>
        <A>
          <span>选择产品</span>
        </A>
      </Section>
    </Fragment>
  )
}

export default ChoseProducts