//your code here
let arr = [2,1,2,3,1,2,1,21,1,1,1,1,1,1,1];
alert(getMax(arr))

function getMax(arr) {
	arr.sort((a,b)=>a-b);
	let max = 0;
	let maxEle = arr[0];
	for (let i = 0; i < arr.length; i++) {
		let eleCount = arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i]);
		if(eleCount > max){
			max = eleCount;
			maxEle = arr[i];
			i = arr.lastIndexOf(arr[i]);
		}
	}
	return maxEle;
}

