// destructuring (dỡ bỏ cấu trúc)

// dỡ bõ cấu trúc của arr
const arr = [10];
const [a, b = 20] = arr; 
console.log(a,b); // 10 20

// dỡ bõ cấu trúc của obj
const obj = {
	a: 1,
	b: 2,
	c: 3
};

const { a, ...c } = obj;
console.log(a, c); // 1 {b: 2, c: 3}