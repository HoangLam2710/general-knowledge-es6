// rest là phần còn lại
// khi bạn không biết sẽ truyển vào bao nhiêu tham số nghĩa là số lượng
// tham số có thể thay đổi thì dùng rest để lấy phần còn lại
// rest sẽ trả về 1 mảng
function log(a, ...numbers){
	console.log(a);
	console.log(numbers);
}

log(1, 2, 3, 4);  // result: 1    [2, 3, 4]

// vậy rest khác arguments ở đâu
// arguments chứa tất cả các biến mà mình truyển vào và
// nó trả về 1 array like object

// example
function sum(...nums){
	return nums.reduce((a,b) => a + b, 0);
}

sum(1,2,3,4,5);

// example 2
function join(separator, ...strings){
	return strings.join(separator);
}

join('.', 'a', 'b', 'c');