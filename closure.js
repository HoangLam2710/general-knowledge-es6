// closure
function sum(a, b){
	const c = a + b;
	// theo thông thường thì biến c sau khi dc dùng xong sẽ bị xóa khỏi bộ nhớ
	// để giải phóng ram nên c trong function dưới sẽ bị undefined
	// nhưng trong js có 1 tính năng tên là closure cho phép hàm sử dụng
	// biến bên ngoài dù không được truyền vào 
	// (chỉ sử dụng trong trường hợp function trả về 1 function)
	return function() {
		console.log(c);
	};
}

sum(1, 2)();


// example ứng dụng
function debug(name) {
	return function(str) {
		console.log(`[${name}] ${str}`);
	}
}

const log = debug('Mouse');
log('Error happened');