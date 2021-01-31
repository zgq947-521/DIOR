function $(selector){
	if(document.querySelectorAll(selector).length === 1){
		return document.querySelectorAll(selector)[0];
	}
	return document.querySelectorAll(selector);
}
function getRandomColor(){
	var arr = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
	var result = "#";
	for(var i = 0; i < 6;i++){
		var index = Math.floor(Math.random() * 16)
		result = result + arr[index];
	}
	return result;
}

function bindEvent(list,event,fn){
	for(var i = 0; i < list.length;i++){
		list[i][event] = fn;
	}
}

function verifyCode(n){
	let count = n || 4;
	let arr = ["q","a","z","x","s","w","e","d","c","v","f","r","t","g","b","n","h","y","u","j","m","k","i","o","l","p","0","1","2","3","4","5","6","7","8","9"];
	let result = "";
	for(let i = 0; i < count ;i++){
		var index = Math.floor(Math.random() * arr.length)
		result = result + arr[index];
	}
	return result;
}
