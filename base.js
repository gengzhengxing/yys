// function $(selector){
// 	var result = document.querySelectorAll(selector);
// 	if(result.length == 1){
// 		return result[0];
// 	}else{
// 		return result;
// 	}
// }
function $1(v){
	if(typeof v == "function"){
		window.onload = v;
	}else if(typeof v == "string"){
		var result = document.querySelectorAll(v);
		if(result.length == 1){
			return result[0];
		}else{
			return result;
		}
	}
}