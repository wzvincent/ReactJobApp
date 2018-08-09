import React from 'react'
import {NavBar} from 'antd-mobile'
import {connect} from 'react-redux'
import {Switch, Route} from 'react-router-dom'
import NavLinkBar from '../navlink/navlink'
import Boss from '../../component/boss/boss'
import Genius from '../../component/genius/genius'
import User from '../../component/user/user'

function Msg(){
    return <h2>Msg</h2>
}

@connect(
    state=>state
)

class Dashboard extends React.Component{
    
    render(){
        const {pathname} = this.props.location
        const user = this.props.user
        const navList = [
            {
                path:'/boss',
                text:'Candidate',
                icon:'boss',
                title:'Candidate List',
                component:Boss,
                hide:user.type=='genius'
            },
            {
                path:'/genius',
                text:'Boss',
                icon:'job',
                title:'Boss List',
                component:Genius,
                hide:user.type=='boss'
            },
            {
                path:'/msg',
                text:'Message',
                icon:'msg',
                title:'Message',
                component:Msg
            },
            {
                path:'/me',
                text:'Me',
                icon:'user',
                title:'User Center',
                component:User
            }
        ]
        const page = navList.find(v=>v.path==pathname)
        if (!page) return null
        return (
            <div>
				<NavBar className='fixd-header' mode='dard'>{page.title}</NavBar>
				<div style={{marginTop:45}}>
						<Switch>
							{navList.map(v=>(
								<Route key={v.path} path={v.path} component={v.component}></Route>
							))}
						</Switch>
				</div>

				<NavLinkBar data={navList}></NavLinkBar>
				
			</div>
        )
    }
}

export default Dashboard