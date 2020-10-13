import React,{Component, Fragment} from 'react'
import { connect } from 'react-redux'

import NavBar from '../../component/navBar/index'
import BaseButton  from '../../component/baseButton/index'
//组件引入
import UserInfo from './childCom/userinfo'
import PutPhoto from './childCom/putphoto'
import ChoseProduct from './childCom/choseProduct'
class Home extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Fragment>
        <NavBar title="首页" />
        <UserInfo />
        <ChoseProduct />
        <PutPhoto />
        <BaseButton marginTop='2.8rem' content='确认' />
      </Fragment>
    )
  }
}
const mapStateToProps = (state) =>{
  return{

  }
}
const mapDispatchToProps = (dispatch) =>{
  return {

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)