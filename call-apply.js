// call khác bind
// bind trả về một hàm và phải có dấu () thì hàm mới chạy
// gọi hàm và trả về giá trị mà hàm trả về

function greeting(name){
	console.log(`Hi! ${this.name}. I am ${this.age}.`);
}

const cat = {
	name: 'Tom',
	age: '10'
};

greeting.call(cat);
// trong trường hợp này thì call sẽ thực hiện hàm
// log ra Hi! Tom. I am 10.
// và trả về undifined

// -----------------------------------------------------

// apply
// call: func.call(this, param1, param2, ...);
// apply: func.apply(this, [param1, param2, ...]);
// cách hoạt động của 2 method giống nhau
// khác nhau:
// call: nhận vào 1 loạt các tham số
// apply: nhận vào là 1 array chứa các tham số

function greeting(){
	console.log(`Hi! ${this.name}. I am ${this.age}.`);
}

const cat = {
	name: 'Tom',
	age: '10'
};

greeting.apply(cat); // kết quả của apply và call vẫn như nhau

// vd khác dùng hàm apply để gọi 1 hàm không biết rõ có bao nhiêu đầu vào
function sum(){
	const numbers = Array.from(arguments);
	return numbers.reduce((a,b) => a + b);
}

function average(){
	// sum
	const x = sum.apply(null, arguments); // arguments là array-like object nên thỏa mãn điều kiện
	// sum / arguments.length
	return x / arguments.length;
}

average(1, 2, 3, 6);