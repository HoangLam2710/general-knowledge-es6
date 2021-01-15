// https://viblo.asia/p/hieu-scope-va-context-trong-javascript-3P0lPArm5ox

// Context (hay ngữ cảnh) thường được xác định bằng cách gọi hàm. Khi một hàm 
// được gọi như một phương thức của object, this sẽ là đối tượng đó.

var mouse = {
	name: 'Mickey',
	sayHi: function(){
		console.log('Hi my name is', this.name);
	}
};


// mouse.sayHi()
// context của sayHi là mouse
// biến this trong function sayHi đang trỏ vào mouse
var say = mouse.sayHi;
// viết như vầy thì say() đang có một global context
// mà global context tùy thuộc vào môi trường chạy
// vd chạy trên trình duyệt thì this là window
say(); // kết quả là Hi my name is undefined do nó đang ko được gắn với object nào

// cách sửa dùng bind
var say = mouse.sayHi.bind(mouse); 
say(); // kết quả là Hi my name is Mickey

// hoặc nếu có 1 object khác
var cat = {
	name: 'Tom'
};
var say = mouse.sayHi.bind(cat); 
say(); // kết quả là Hi my name is Tom