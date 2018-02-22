import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './unLogin.css';
import LoginList from '../afterLogin/afterLogin.js';

class UnLoginBefore extends Component{
	render(){
		return(
			<section className='order'>
				<img src="//fuss10.elemecdn.com/f/18/9fb04779371b5b162b41032baf5f3gif.gif" alt="请登录"/>
				<h3>登录后查看外卖订单</h3>
				<Link to='/login'><button>立即登录</button></Link>
			</section>
		)
	}
}
class UnLoginAfter extends Component{
	render(){
		let listDOM=[1,2,3,4,5,6,7].map((value,index)=>{return <LoginList key={index}/>});
		return(
			<section>
				{listDOM}
			</section>
		)
	}
}
class UnLogin extends Component{
	constructor(){
		super();
		this.state={
			islogin:false
		}
	}
	componentWillMount(){
		let data=this.props.data.islogin;
		if(data||this._getLocal('islogin')){
			this.setState({
				islogin:true
			})
		}
	}
	_getLocal(name){
		return JSON.parse(localStorage.getItem(name));
	}
	render(){
		return(
			<div>{this.state.islogin?<UnLoginAfter/>:<UnLoginBefore/>}</div>
		)
	}
}

const mapStateToProps=(state)=>{
	return{
		data:state.loginPart
	}
}
export default connect(
	mapStateToProps
)(UnLogin);