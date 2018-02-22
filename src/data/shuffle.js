export const shuffle=(arr)=>{
	const arrLength=arr.length;
	for(let i=arrLength-1;i>=0;i--){
		let index=Math.floor(Math.random()*(i+1));
		[arr[i],arr[index]]=[arr[index],arr[i]];
	}
	return arr;
}

export const splitArr=(arr,len)=>{
	let arr_len=arr.length;
	let resultArr=[];
	for(let i=0;i<arr_len;i+=len){
		resultArr.push(arr.slice(i,i+len));
	}
	return resultArr;
}