import React,{Component, Fragment} from 'react'
import { connet } from 'react-redux'

class Record extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Fragment>
        Home
      </Fragment>
    )
  }
}
mapStateToProps(state){

}
export default connet(mapStateToProps,mapDispatchToProps)(Record)