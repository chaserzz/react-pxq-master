import React,{Fragment} from 'react'
import { Section ,Title,A , Span , ProductItem } from './style'

const ChoseProducts = (props) => {
  function getList(){
    let list = []
    if( props.list.length === 0 ){
      return (
        <Span>选择产品</Span>
      )
    }else{
      props.list.map((item,index) =>{
      list.push((<ProductItem>{item.product_name + 'x' + item.num}</ProductItem>))
      })
      return (list)
    }
  }
  return (
    <Fragment>
      <Section>
        <Title>请选择销售的产品</Title>
        <A>
          {getList()}
        </A>
      </Section>
    </Fragment>
  )
}

export default ChoseProducts