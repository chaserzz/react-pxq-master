import React,{Component, Fragment} from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import API from '../../api/api.js';
import envconfig from '../../envconfig/envconfig'

import NavBar from '../../component/navBar/index'
import BaseButton  from '../../component/baseButton/index'
import Alter from '../../component/alert'

//组件引入
import UserInfo from './childCom/userinfo'
import PutPhoto from './childCom/putphoto'
import ChoseProduct from './childCom/choseProduct'
class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      showAlert : false, //警告组件是否显示
      AlertContent : '',  //警告组件内容
      Productlist : [] //产品组件  
    }
    this.handleNameInput = this.handleNameInput.bind(this)
    this.handlePriceInput = this.handlePriceInput.bind(this)
    this.handlePhoneInput = this.handlePhoneInput.bind(this)
    this.handleUpLoadImg = this.handleUpLoadImg.bind(this)
    this.hiddenAlert = this.hiddenAlert.bind(this)
    this.confirmInfo = this.confirmInfo.bind(this)
  }
  componentDidUpdate(){
    
  }
  render(){
    return (
      <Fragment>
      <NavBar title="首页" />
      <UserInfo
      price={this.props.price} 
      name={this.props.name} 
      phone={this.props.phone} 
      handleNameChange = {this.handleNameInput}    //处理客户名字的Input框的输入
      handlePriceChange = {this.handlePriceInput}  //处理金额的Input框的输入
      handlePhoneChange = {this.handlePhoneInput}  //处理客户电话的Input框的输入
      />
      <ChoseProduct 
      list={this.props.products}
      />
      <PutPhoto 
      handleInputImg={this.handleUpLoadImg} 
      url = {this.props.imageUrl}/>
      <BaseButton 
      marginTop='2.8rem' 
      content='确认'
      baseBtnClick={this.confirmInfo}
      />
      <Alter 
      showAlert={this.state.showAlert} 
      alertContent={this.state.AlertContent}
      closeAlert = {this.hiddenAlert}
      />
    </Fragment>
    )
  }
  //确认按钮点击
  confirmInfo(){
    //判断金额是否已经填入
    if(this.props.price === ''){
      this.setState((preState) =>{
        return {
          showAlert:true,
          AlertContent:"请输入销售金额"
        }
      })
      return 
    }
    //判断用户名是否已经填入
    if(this.props.name === ''){
      this.setState((preState) =>{
        return {
          showAlert:true,
          AlertContent:"请输入客户姓名"
        }
      })
      return 
    }
    //判断客户电话是否已经填入
    if(this.props.phone === ''){
      this.setState((preState) =>{
        return {
          showAlert:true,
          AlertContent:"请输入客户电话"
        }
      })
      return 
    }
    this.setState(()=>{
      return {
        showAlert:true,
        AlertContent:"上传成功"
      }
    })

  }
  //客户用户名输入
  handleNameInput(e){
    this.props.handleNameInput(e.target.value)
  }
  //金额输入
  handlePriceInput(e){
    this.props.handlePriceInput(e.target.value)
  }
  //客户号码输入
  handlePhoneInput(e){
    this.props.handlePhoneInput(e.target.value)
  }
  //Alert组件隐藏
  hiddenAlert(){
    this.setState((state)=>{
      const newState = state
      newState.showAlert = false
      return newState
    })
  }
  async handleUpLoadImg(e){
    try{
      let formdata = new FormData();
      formdata.append('file', e.target.files[0]);
      let result = await API.uploadImg({data: formdata});
      this.props.handleSavaImg(envconfig.imgUrl + result.image_path);
      console.log(result);
    }catch(err){
      console.error(err);
    }
  }
}
const mapStateToProps = (state) =>{
  return{
    price:state.home.price,  //金额
    name:state.home.name,    //客户名字
    phone:state.home.phone,   //客户号码
    imageUrl:state.home.url,  //图片url
    products:state.product.currentProducts //产品数组
  }
}
const mapDispathToProps = (dispatch) =>{
  return { 
    //用户名dispatch
    handleNameInput(name){
      dispatch(actionCreators.inputName(name))
    },
    //价格dispatch
    handlePriceInput(price){
      dispatch(actionCreators.inputPrice(price))
    },
    ////电话号码dispatch
    handlePhoneInput(phone){
      dispatch(actionCreators.inputPhone(phone))
    },
    //图片dispatch
    handleSavaImg(url){
      dispatch(actionCreators.uploadImg(url))
    },
    //清空数据dispatch
    handleClearData(){
      dispatch(actionCreators.clearData())
    }
  }
}
export default connect( mapStateToProps , mapDispathToProps )(Home)