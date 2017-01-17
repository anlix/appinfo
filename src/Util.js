export default{
	formatDate(value){
		let date = value;
		var year = date.getFullYear();
		var month = date.getMonth()-0+1;
		var day = date.getDate();
		return `${year}-${month>9?month:'0'+month}-${day>9?day:'0'+day}`;
	}

}