export const select = el => document.querySelector(el);

export const selectAll = el => document.querySelectorAll(el);

export const getData = ( el, data ) =>{
	const arr = [];
	selectAll(el).forEach( val =>{
		arr.push(val.getAttribute(data));
	})
	return arr;
}
