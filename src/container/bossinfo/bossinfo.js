import React from 'react'
import {NavBar, InputItem, TextareaItem, Button} from 'antd-mobile'
import IconSelector from '../../component/icon-selector/icon-selector'

class BossInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title:''
        }
    }
    onChange(key, val){
        this.setState({
            [key]:val
        })
    }
    render(){
        return (
            <div>
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
                <Button type='primary'>Save</Button>
            </div>
        )
    }
}

export default BossInfo