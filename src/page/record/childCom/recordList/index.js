import React, { Component } from 'react' 

import API from '../../../../api/api'

import { RecordListContent , RecordListItem , Header , CreatTime , Status , ItemInfo , P ,Span , Footer } from './style'

class RecordList extends Component{
  constructor(props){
    super(props)
    this.state = {
      list:[]
    }
  }
  //问题:可以log出来list的数据,但是返回值还是一个空的data
  // static async getDerivedStateFromProps(nextProps,prevState){
  //   let type = nextProps.location.pathname.split('/')[2]
  //   let list = {}
  //   list = await API.getRecord({type})
  //   return{
  //    list:list.data,
  //     type
  //   }
  // }
  //动态获取list 的数据
  async componentDidMount() {
    let type = this.props.location.pathname.split('/')[2]
    let list = {}
    list = await API.getRecord({type})
    this.setState(()=>
      ({
        list:list.data,
       })
    )
  }
  render() {
    return (
      <section key={this.props.location.pathname}>
        <RecordListContent>
         {this.state.list.map((item,index)=>{
           return (
            <RecordListItem key={item.sales_id}>
            <Header>
              <CreatTime>{item.created_at}</CreatTime>
              <Status>{item.type_name}</Status>
            </Header>
            <ItemInfo>
              <P>
                <Span>用户名：{item.customers_name}&emsp;{item.customers_phone}</Span>
              </P>
              <P>
                <Span>商&emsp;品：{item.product.map((product,id) =>{
                    return (
                      <Span key={product.product_id}>{product.product_name}&emsp;</Span>
                    )
                })}</Span>
              </P>
              <P>
               <Span>金&emsp;额：{item.sales_money}&emsp;佣金：{item.commission}</Span>
              </P>
            </ItemInfo>
            <Footer>
            等待管理员审核，审核通过后，佣金将结算至账户
            </Footer>
          </RecordListItem>
          )
         })}
        </RecordListContent>
      </section>
    )
  }
}

export default RecordList