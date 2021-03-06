import React from 'react'
import {NavBar, InputItem, TextareaItem, Button} from 'antd-mobile'
import IconSelector from '../../component/icon-selector/icon-selector'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {update} from '../../redux/user.redux'
@connect(
    state=>state.user,
    {update}
)

class BossInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title:'',
            desc:'',
            company:'',
            salary:''
        }
    }
    onChange(key, val){
        this.setState({
            [key]:val
        })
    }
    render(){
        const path = this.props.location.pathname
        const redirect = this.props.redirectTo
        return (
            <div>
                {redirect&&redirect!==path ? <Redirect to={this.props.redirectTo}></Redirect> : null}
                <NavBar mode="dark">Info Supplementary</NavBar>
                <IconSelector
                    selectIcon={(imgname)=>{
						this.setState({
							icon:imgname
						})
					}}
                ></IconSelector>
                <InputItem onChange={(v) => this.onChange('title', v)}
                >
                    Title    
                </InputItem>
                <InputItem onChange={(v) => this.onChange('company', v)}
                >
                    Company   
                </InputItem>
                <InputItem onChange={(v) => this.onChange('salary', v)}
                >
                    Salary    
                </InputItem>
                <TextareaItem 
                    onChange={(v) => this.onChange('desc', v)}
                    rows={3}
                    autoHeight
                    title='Job Desc'
                >
                </TextareaItem>
                <Button
                    onClick={()=>{
                        this.props.update(this.state)
                    }}
                    type='primary'>Save</Button>
            </div>
        )
    }
}

export default BossInfo