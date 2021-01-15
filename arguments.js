//array
const names = ['Le', 'Hoang', 'Lam'];
for(let i = 0; i < names.length; i++){
	console.log(names[i]);
}

// array-like object
const obj = {
	0: 'Le',
	1: 'Hoang',
	2: 'Lam',
	length: 3
};
for(let i = 0; i < obj.length; i++){
	console.log(obj[i]);
}

// arguments là 1 biến tồn tại bên trong 1 hàm (hàm bình thường)
// không phải arrow function.
// arguments là một array-like object

// cach 1
function sum(){
	let result = 0;
	for(let i = 0; i < arguments.length; i++){
		result += arguments[i];
	}
	return result;
}

// cach 2
function sum2(){
	const numbers = Array.from(arguments);
	return numbers.reduce((a,b) => a + b);
}

sum(1,2,3,4,5,10);