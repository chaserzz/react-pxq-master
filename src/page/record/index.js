import React,{Component, Fragment} from 'react'
import { connect } from 'react-redux'
import { HashRouter, Route, NavLink} from 'react-router-dom'

import NavBar from '../../component/navBar'

import {NavWrapper} from './style'
import RecordList from './childCom/recordList'
class Record extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Fragment>
        <NavBar right=' ' title='记录' />
        <NavWrapper>
          <NavLink to='/list' className="nav_link">已通过</NavLink>
          <NavLink to='/list' className="nav_link">已通过</NavLink>
          <NavLink to='/list' className="nav_link">已通过</NavLink>
        </NavWrapper>
        <HashRouter>
          <Route path='/list' component={RecordList}/>
        </HashRouter>
      </Fragment>
    )
  }
}
const mapStateToProps = (state) =>{
  return {

  }
}
const mapDispatchToProps = (dispatch) =>{
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Record)