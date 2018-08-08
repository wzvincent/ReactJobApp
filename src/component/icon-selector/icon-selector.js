import React from 'react'
import {Grid, List} from 'antd-mobile'
import PropTypes from 'prop-types'

class IconSelector extends React.Component{
    static propTypes = {
        selectIcon: PropTypes.func.isRequired
    }
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        const iconList = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'
						.split(',')
						.map(v=>({
						    icon:require(`../imgs/${v}.png`),
							text:v
                        }))
        const gridHeader = this.state.icon 
                            ? (<div>
                                <span>picked icon</span>
                                <img style={{width:20}} src={this.state.icon} alt=""/>
                            </div>)
                            : <div>please pick an icon</div>
        return (
            <div>
                <List renderHeader={()=>gridHeader}>
                    <Grid 
                        data={iconList}
                        columnNum={5}
                        onClick={elm=>{
                            this.props.selectIcon(elm.text)
                            this.setState(elm)
                        }}
                    ></Grid>
                </List>
            </div>
        )
    }
}

export default IconSelector