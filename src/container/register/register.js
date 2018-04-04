import React from 'react'
import Logo from '../../component/logo/logo'
import {List, InputItem, Radio, WingBlank, WhiteSpace, Button} from 'antd-mobile'

class Register extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      type:'genuis'
    }
  }
  render(){
    const RadioItem = Radio.RadioItem
    return (
      <div>
        <Logo></Logo>
        <List>
          <InputItem>Username</InputItem>
          <WhiteSpace/>
          <InputItem>Password</InputItem>
          <WhiteSpace/>
          <InputItem>Verify</InputItem>
          <WhiteSpace/>
          <RadioItem checked={this.state.type=='genuis'}>
            Applicant
          </RadioItem>
          <RadioItem checked={this.state.type=='boss'}>
            Boss
          </RadioItem>
          <WhiteSpace/>
          <Button tyoe='primary'>SIGN UP</Button>
        </List>
      </div>
    )
  }
}

export default Register
