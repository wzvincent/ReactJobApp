import React from 'react'
import Logo from '../../component/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {login} from '../../redux/user.redux'
import hocForm from '../../component/hoc-form/hoc-form'

@connect(
  state=>state.user,
  {login}
)
@hocForm

class Login extends React.Component{
  constructor(props){
    super(props)
    this.register = this.register.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  register(){
    this.props.history.push('./register')
  }

  handleLogin(){
    this.props.login(this.props.state)
  }

  render(){
    return (
      <div>
        {this.props.redirectTo? <Redirect to={this.props.redirectTo}/>:null}
        <Logo></Logo>
        <h2>LOGIN</h2>
        <WingBlank>
          <List>
            {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
            <InputItem
              onChange={v=>this.props.handleChange('user', v)}
            >Username</InputItem>
            <WhiteSpace/>
            <InputItem
              onChange={v=>this.props.handleChange('pwd', v)}
              type='password'
            >Password</InputItem>
          </List>
          <WhiteSpace/>
          <Button onClick={this.handleLogin} type='primary'>Login</Button>
          <WhiteSpace/>
          <Button onClick={this.register} type='primary'>Sign Up</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login
