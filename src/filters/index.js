export function formatDate(value){
	let year = new Date(value).getFullYear();
	let month = new Date(value).getMonth()-0+1;
	let day = new Date(value).getDate();
	return `$(year)-$(month)-$(day)`;
}