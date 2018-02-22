import React,{Component} from 'react';
import TabsLi from '../../../components/shopdetails/tabs/tabs.js';

class TabsSmart extends Component{
	constructor(){
		super();
		this.state={
			current:false
		}
	}
	handClick(){
		this.setState({
			current:true
		})
	}
	render(){
		const data=[
			{
				title:'商品',
				num:0
			},
			{
				title:'评价',
				num:2
			},
			{
				title:'店铺',
				num:3
			}
		]
		return(
			<TabsLi data={data}>

			</TabsLi>
		)
	}
}

export default TabsSmart;