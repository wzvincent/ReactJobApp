import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {loadData} from '../../redux/user.redux'
import {connect} from 'react-redux'

@withRouter
@connect(
  null,
  {loadData}
)

class AuthRoute extends React.Component{
  componentDidMount(){
    const publicList = ['/login', 'register']
    // 获取当前路由
    const pathname = this.props.location.pathname
    if(publicList.indexOf(pathname)>-1){
      return null
    }
    // get user info
    axios.get('/user/info').
      then(res=>{
        console.log(res.status)
        console.log(res.data.code)
        if(res.status===200){
          //has login info?
          if(res.data.code===0){
            this.props.loadData(res.data.data)
          } else {
            this.props.history.push('/login')
          }
        }
      })

  }

  render(){
    return null
  }
}

export default AuthRoute
