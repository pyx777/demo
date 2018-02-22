import React,{Component} from 'react';
import Header from '../../components/header/header.js';
import {connect} from 'react-redux';
import {logout} from '../../reducers/dataState.js';
import Message from '../../components/message/message.js';

class MessageSmart extends Component{
	constructor(){
		super();
		this.state={
			name:'',
			phone:0
		}
	}
	componentWillMount(){
		this.setState({
			name:this.props.data.name,
			phone:this.props.data.phone
		})
	}
	render(){
		return(
			<div>
				<Header but={'login'} title={'账户信息'}/>
				<Message logout={this.props.logout} name={this.state.name} phone={this.state.phone}/>
			</div>
		)
	}
}

const mapStateToProps=(state)=>{
	return{
		data:state.loginPart
	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
		logout:()=>{
			dispatch(logout());
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MessageSmart);