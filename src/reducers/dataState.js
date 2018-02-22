const LOGIN='LOGIN';
const LOGOUT='LOGOUT';

export default function(state,action){
	if(!state){
		state={
			loginPart:{islogin:false,name:'',phone:0},
			allSelected:{}
		}
	}
	switch(action.type){
		case LOGIN:
			return{
				...state,
				loginPart:{...action.data1}
			}
		case LOGOUT:
			return{
				...state,
				loginPart:{islogin:false,name:'',phone:0}
			}
		default:
			return state;
	}
}

export const login=(data1)=>{
	return{
		type:'LOGIN',
		data1
	}
}

export const logout=(data)=>{
	return{
		type:'LOGOUT'
	}
}