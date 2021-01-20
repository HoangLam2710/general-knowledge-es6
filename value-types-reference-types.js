// value types gồm các kiểu còn lại
let a1 = 1;
let a2 = 1;
console.log(a1 === a2); // true

// reference nghĩa là tham chiếu
// reference types gồm object, array, function
let obj1 = { a: 1 };
let obj2 = { a: 1 };
console.log(obj1 === obj2) // false

// tuy cách viết nhìn có vẻ giống nhau nhưng kết quả so sánh obj là false
// lí do là vì obj là kiểu dữ liệu phức tạp nên giá trị không lưu vào biến
// mà biến như là địa chỉ của obj đó (obj như là căn nhà)
// nên tuy là obj giồng nhau nhưng do gán ở 2 địa chỉ khác nhau => false


// tạo 1 biến a3
let a3 = a2;
a3 = 2; 
console.log(a2); // 1
// đối với values type thì cách viết như trên có nghĩa là
// biến a3 được khởi tạo và copy giá trị từ a2 nên 
// biến a3 có thay đổi giá trị thì giá trị cũng không ảnh hưởng đến biến a2

// 
let obj3 = obj2;
obj3.a = 2;
console.log(obj2); // { a: 2 }
// đối với reference type thì cách viết như trên có nghĩa là
// biến obj3 được khởi tạo và cùng tham chiếu đến "obj nào đó" mà obj2 tham chiếu 
// nên khi obj3.a set lại thì cũng có nghĩa là biến a trong "obj nào đó" đó được thay đổi
// mà obj2 cũng tham chiếu đến "obj nào đó" vì vậy result là 2

console.log(obj3 === obj2) // true
// dựa theo cách giải thích ở trên thì kết quả là true