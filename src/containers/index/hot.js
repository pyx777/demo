import React,{Component} from 'react';
import {hot_data} from '../../data/data.js';
import {shuffle} from '../../data/shuffle.js';
import Hot from '../../components/index/hot/hot.js';

class Hotsmart extends Component{
	constructor(){
		super();
		this.state={
			hot_data:[]
		}
	}
	componentWillMount(){
		if(hot_data){
			this.setState({
				hot_data:shuffle(hot_data)
			})
		}
	}

	render(){
		return(
			<Hot hot_data={this.state.hot_data}/>
		)
	}
}

export default Hotsmart;