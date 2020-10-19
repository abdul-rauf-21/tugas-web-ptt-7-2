const select = el =>{
	return document.querySelector(el);
}

const selectAll = el =>{
	return document.querySelectorAll(el);
}

const getData = ( el, data ) =>{
	const arr = [];
	selectAll(el).forEach( val =>{
		arr.push(val.getAttribute(data));
	})
	return arr;
}

export { select, selectAll, getData };