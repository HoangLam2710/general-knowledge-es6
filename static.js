// cách viết function bình thường
function Foo {

}

Foo.prototype.anotherMethod = function() {

}

Foo.someMethod = function() {
  
}


// cách viết Class
class Foo {
	static someMethod() {
		console.log('some method');
	}

	anotherMethod() {
		console.log('another method');
	}
}

Foo.someMethod(); // static method thuộc class nên chỉ Class mới gọi dc
Foo.anotherMethod(); // không thể gọi được bằng cách này mà phải tạo 1 instance

// 1 object được tạo ra từ 1 class thì object đấy được gọi là instance của class
const foo = new Foo();
foo.anotherMethod();

// và với cách tạo instance này thì không gọi dc static method trong class vì
// static method thuộc class