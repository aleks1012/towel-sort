
// You should implement your task here.

module.exports = function towelSort (matrix) {
  	if (!matrix) return [];
  	if (matrix.length === 0) return [];
  	
  	console.log(matrix.length);
  	console.log(matrix);
  	//console.log(matrix[0]);
  	if (matrix.length < 4) {
  	let aaa = matrix[0];
  	//console.log(aaa);
  	let bbb = matrix[1].reverse();
  	//console.log(bbb);
  	let ccc = aaa.concat(bbb);
  	let ccc1 = ccc.filter(Boolean);
  	console.log(ccc1);
  	let ddd = matrix[2];
  	console.log(ddd);
  	let eee = ccc.concat(ddd);
  	console.log(eee);
  	let eee1 = eee.filter(Boolean);
  	console.log(eee1);
 return eee1;
} else {
	let aaa = matrix[0];
  	//console.log(aaa);
  	let bbb = matrix[1].reverse();
  	//console.log(bbb);
  	let ccc = aaa.concat(bbb);
  	let ccc1 = ccc.filter(Boolean);
  	console.log(ccc1);
  	let ddd = matrix[2];
  	console.log(ddd);
  	let eee = ccc.concat(ddd);
  	console.log(eee);
  	let eee1 = eee.filter(Boolean);
  	console.log(eee1);
  	let fff = matrix[3].reverse();
  	console.log(fff);
  	let ggg = eee1.concat(fff);
  	console.log(ggg);
  	return ggg;
}
  	/*let fff = matrix[3].reverse();
  	console.log(fff);
  	let ggg = eee1.concat(fff);
  	console.log(ggg);*/
  	//let ggg = eee1.concat(fff);
  	//console.log(ggg);
  	//let hhh = ggg.filter(Boolean);
  	//console.log(hhh);
  	//return ggg;
  	/*console.log(matrix[1].reverse());
	console.log(matrix[2]);
  	console.log(matrix[3].reverse())
  	console.log(matrix[0](matrix[1].reverse()))
  	console.log([].concat.apply(...matrix));*/
  /*flattened = matrix.reduce(function(a, b) {
  console.log(a.concat(b));
});*/
}
