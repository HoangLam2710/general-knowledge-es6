// spread hiểu nghĩa đơn giản là trải ra
const a = [1, 2, 3];

//trường hợp a
const b = [0, a, 4];
console.log(b); // [0, [1, 2, 3], 4];

//trường hợp ...a
const b = [0, ...a, 4];
console.log(b); // [0, 1, 2, 3, 4];

// vậy rest và spread khác nhau thế nào
// rest sẽ gom những phần tử nhận vào thành 1 mảng
// spread trải những giá trị trong mảng ra thành các phần tử

// example
const a = [1, 2, 3];

function sum(...numbers) {
	console.log(...numbers);
}

sum(...a); // viết theo kiểu này => sum(1,2,3); 
// vào trong hàm rest sẽ gom các giá trị lại thành mảng
// kết quả vẫn là [1, 2, 3]



//--------------------------------------
// spread an object

// shadow-clone
const obj1 = {
  a: 1,
  b: 2,
  c: 3,
  d: {e: 10}
};

// cách viết bình thường
let obj2 = {};
for(let key in obj1){
	obj2[key] = obj1[key];
}

// cách dùng spread nhưng cách này chỉ tạo ra 1 bản shadow-clone
let obj2 = {
	...obj1,
	z: 1000
};

obj2.d.e = 11;
console.log({obj1, obj2}); // {obj1: { a: 1, b: 2, c: 3, d: {e: 11} },
						   //  obj2: { a: 1, b: 2, c: 3, d: {e: 11}, z: 1000 } }
// shadow-clone chỉ clone ra 1 lần duy nhất, nếu trong object có 1 object con
// thì khi thay đổi ở obj2, obj1 vẫn thay đổi theo do cùng trỏ về 1 object
 
//--------------------------------------
// cách deep-clone (copy ra object mới mà có thay đổi cũng không ảnh hướng object cũ)
const obj1 = {
  a: 1,
  b: 2,
  c: 3,
  d: {e: 10}
};

let obj2 = JSON.parse(JSON.stringify(obj1));

obj2.d.e = 11;

console.log({obj1, obj2}); // {obj1: { a: 1, b: 2, c: 3, d: {e: 10} },
						   //  obj2: { a: 1, b: 2, c: 3, d: {e: 11}, z: 1000 } }

// JSON.stringify() chuyển là 1 object sang chuỗi JSON
// JSON.parse() chuyển chuỗi JSON thành object