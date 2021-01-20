// higher order functions (hàm có thứ tự cao hơn)
// hàm có thể nhận vào functions là tham số hoặc trả về 1 function gọi là higher order functions
// ví dụ: 
function debug(name) {
	return function(str) {
		console.log(`[${name}] ${str}`);
	}
}

// another example
function waitAndRun(ms, func) {
	setTimeOut(fun, ms);
}

function run() {
	console.log('Run');
}

waitAndRun(2000, run);
// lưu ý ko viết là waitAndRun(2000, run()) do sẽ làm chạy hàm run
// mình đang cần truyền hàm đó vào hàm waitAndRun nên chỉ viết là run

// lí do tại sao dùng higher-order-functions, ứng dụng thực tế
// - giúp chia nhỏ chương trình thành nhiều hàm, mỗi hàm sẽ chia nhỏ logic của chương trình
// và test từng phần một. nếu một ctr dài rất khó test và sửa lỗi
// - hàm nhỏ khi chạy xong sẽ giải phóng bộ nhớ giúp chương trình chạy hiệu quả hơn 