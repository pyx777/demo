import React,{Component} from 'react';
import ListHeader from '../../components/shopdetails/listHeader/listHeader.js';
import 'es6-promise';
import 'whatwg-fetch';
import TabsSmart from './tabs/tabs_con.js';

class ShopDetails extends Component{
	constructor(){
		super();
		this.state={
			headerData:{}
		}
	}
	_formatImg(src){
		let png=/png/g.test(src);
		src=`${src}${png?'.png':'.jpeg'}`;
		let imgValue=src.split('');
		imgValue.splice(3,0,'/');
		imgValue.splice(1,0,'/');
		return imgValue.join('');
	}
	componentDidMount(){
		fetch(`/api/shopping/restaurant/${this.props.id}?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification&extras[]=qualification`)
		.then(response=>console.log(response.headers.get('content-type')))
		.then(dataJson=>{
			document.title=dataJson.name;
			this.setState({
				headerData:{
					id:dataJson.id,
					name:dataJson.name,
					piecewise_agent_fee:dataJson.piecewise_agent_fee.description,
					float_minimum_order_amount:dataJson.float_minimum_order_amount,
					promotion_info:dataJson.promotion_info.length===0?'欢迎光临，用餐高峰期请提前下单，谢谢。':dataJson.promotion_info,
					order_lead_time:dataJson.order_lead_time,
					kd:dataJson.delivery_mode?'蜂鸟配送':'商家配送',
					cut:dataJson.activities[1],
					activitiesNum:dataJson.activities.length,
					allactivities:dataJson.activities,
					image_path:this._formatImg(dataJson.image_path),
					rating:dataJson.rating
				}
			})
		})
	}
	render(){
		return(
			<div className='scrollBox'>
				<div className='scrollMain'>
					<ListHeader data={this.state.headerData}/>
					<TabsSmart id={this.props.id} data={this.state.headerData}/>
				</div>
			</div>
		)
	}
}

export default ShopDetails;