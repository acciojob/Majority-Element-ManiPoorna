//your code here
let arr = [2,1,2,1,1,1,2,3,1]
alert(getMax(arr))
function getMax(arr) {
	let max = 0;
	let maxEle = 0;
	for (let i = 0; i < arr.length-1; i++) {
		let count = 0;
		for (let j = i+1; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				count++
			}
		}
		if (count > max) {
			max = count;
			maxEle = arr[i];
		}
	}
	if ( max >= Math.floor(arr.length/2) ) {
		return maxEle
	}
	else{
		return -1
	}
}