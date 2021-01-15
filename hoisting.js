// Hoisting là hành động mặc định của Javascript, nó sẽ chuyển phần 
// khai báo lên phía trên top Trong Javascript, một biến (variable) có thể
// được khai báo sau khi được sử dụng
// vd:
console.log(a);
var a = 'Hello Hoisting';

// a is undefined
// li do
var a;
console.log(a);
a = 'Hello Hoisting';