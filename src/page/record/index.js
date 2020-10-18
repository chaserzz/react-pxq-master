import React,{Component, Fragment} from 'react'
import { HashRouter, Route, NavLink , Switch, Redirect} from 'react-router-dom'

import NavBar from '../../component/navBar'

import { NavWrapper ,} from './style'
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
          <NavLink to='/record/passed' className="nav_link">已通过</NavLink>
          <NavLink to='/record/audited' className="nav_link">待审核</NavLink>
          <NavLink to='/record/failed' className="nav_link">未通过</NavLink>
        </NavWrapper>
        <HashRouter>
          <Switch>
          <Route path={`/record/:type`} component={RecordList} key="1"/>
          <Redirect path='/' to='/record/passed'/>
          </Switch>
        </HashRouter>
      </Fragment>
    )
  }
}

export default Record