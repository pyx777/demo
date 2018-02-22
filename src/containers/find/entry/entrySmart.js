import React,{Component} from 'react';
import {entryData} from '../../../data/data.js';
import Entry from '../../../components/find/entry/entry.js';

class EntrySmart extends Component{
	constructor(){
		super();
		this.state={
			entryData:[]
		}
	}
	componentWillMount(){
		this.setState({
			entryData
		})
	}
	render(){
		return(
			<Entry data={this.state.entryData}/>
		)
	}
}

export default EntrySmart;