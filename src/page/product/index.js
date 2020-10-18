import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'

import API from '../../api/api'

import NavBar from '../../component/navBar'

import { ProductList , ProductItem , ProductName , LeftWrapper , RightWrapper , NumWrapper } from './style'
class Product extends Component {
  constructor(props){
    super(props)
    this.state ={
      list:[],
    }
    this.handleConfirmClick = this.handleConfirmClick.bind(this)
  }
  //该组件离开的时候
  componentWillUnmount(){
    let list = []
    this.props.list.map((item , index) =>{
      if( item.num !== 0 && item.chose){
        list.push(item)
      }
    })
    this.props.saveBeforeLeave(list)
  }
  //选择产品点击
  handleChoseClick(index){
    this.props.handleChangeChose(index)
  }
  //加号点击
  handleAddNum(index){
    if(this.props.list[index].chose){
      this.props.handleAddNum(index)
    }
  }
  //减号点击
  handleSubNum(index){
    if(this.props.list[index].num === 0 || !this.props.list[index].chose){
      return 
    }
    this.props.handleSubNum(index)
  }
  //NavBar确认点击
  handleConfirmClick(){
    this.props.history.push('/home')
  }
  async componentDidMount(){
    if(this.props.list.length > 0){
      return 
    }
    let product = await API.getProduction()
    product.forEach(element => {
      element.num = 0
      element.chose = true
    })
    this.props.handleInitData(product)
  }
  render(){
    return (
      <section>
        <NavBar title='产品' right='确定' handleRightClick={this.handleConfirmClick} />
        <ProductList>
          {this.props.list.map((item,index) =>{
            return(
              <ProductItem key={item.product_id}>
                <LeftWrapper>
                {/* 左边选择选项 */}
                  <svg t="1603004997631" onClick={this.handleChoseClick.bind(this,index)}  className={item.chose ? 'chose' : ''} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2044" width="1.3rem" height="1.3rem">
                    <path d="M512 64.383234C264.7878 64.383234 64.383234 264.7878 64.383234 512s200.404567 447.616766 447.616766 447.616766 447.616766-200.404567 447.616766-447.616766S759.2122 64.383234 512 64.383234zM749.24404 399.346715 490.771928 730.197844c-25.757381 32.969325-73.223154 32.730188-98.382691-0.833916L268.525094 564.127936c-14.827561-19.780982-10.813317-47.835721 8.967665-62.664303 19.780982-14.827561 47.836743-10.813317 62.664303 8.967665l101.483305 142.855154 237.057022-309.05485c15.21897-19.480527 43.349333-22.93576 62.830882-7.71679C761.008798 351.734802 764.46301 379.865166 749.24404 399.346715z" p-id="2045" fill="#ccc">
                    </path>
                  </svg>
                  <ProductName>
                    {item.product_name}
                  </ProductName>                
                </LeftWrapper>
                <RightWrapper>
                  {/* 减号 */}
                  <svg t="1603005746893" onClick={this.handleSubNum.bind(this,index)} className={item.num>0 ? 'enable' : ''} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3655" width="1.3rem" height="1.3rem">
                    <path d="M497 90c246.319 0 446 199.681 446 446S743.319 982 497 982 51 782.319 51 536 250.681 90 497 90z m218.343 417.263H278.598l-0.706 0.008c-16.18 0.375-29.18 13.608-29.18 29.878 0 16.506 13.38 29.887 29.886 29.887h436.745l0.706-0.008c16.18-0.375 29.18-13.608 29.18-29.879 0-16.505-13.38-29.886-29.886-29.886z" fill="#cccccc" p-id="3656">
                    </path>
                  </svg>
                  {/* 商品数量 */}
                  <NumWrapper>{item.num}</NumWrapper>
                      {/* 加号 */}
                      <svg t="1603005676710" onClick={this.handleAddNum.bind(this,index)} className="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3350" width="1.3rem" height="1.3rem">
                        <path d="M514.5 59C762.2 59 963 259.8 963 507.5S762.2 956 514.5 956 66 755.2 66 507.5 266.8 59 514.5 59z m1.15 205.036c-15.243 0-27.6 12.357-27.6 27.6v201.252H300.6c-15.09 0-27.353 12.111-27.596 27.144l-0.004 0.456c0 15.243 12.357 27.6 27.6 27.6h187.45v173.648c0 15.09 12.111 27.352 27.144 27.596l0.456 0.004c15.243 0 27.6-12.357 27.6-27.6V548.088H730.7c15.09 0 27.353-12.11 27.596-27.143l0.004-0.457c0-15.243-12.357-27.6-27.6-27.6H543.25V291.636c0-15.09-12.111-27.353-27.144-27.597z" fill="#975ec9" p-id="3351">
                        </path>
                      </svg>
                    </RightWrapper>
              </ProductItem>
            )
          })
          }
        </ProductList>
      </section>
    )
  }
}
const mapStateToProps = (state)=>{
  return {
    list:state.product.list
  }
}

const mapDispathToProps = (dispatch) =>{
  return {
    //初始化数组
    handleInitData(list){
      dispatch(actionCreators.getInitList(list))
    },
    //处理添加
    handleAddNum(index){
     dispatch(actionCreators.addProductNum(index))
    },
    //处理减少
    handleSubNum(index){
      dispatch(actionCreators.subProductNum(index))
    },
    //处理是否选择
    handleChangeChose(index){
      dispatch(actionCreators.changeProduceChose(index))
    },
    //离开时保存有效的产品数据
    saveBeforeLeave(list){
      dispatch(actionCreators.saveList(list))
    }
  }
}
export default connect( mapStateToProps , mapDispathToProps )(Product)