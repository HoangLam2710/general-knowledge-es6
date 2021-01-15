// var 
// Như đã biết trong Vanilla Javascript, với từ khóa var chúng ta có thể 
// khai báo đa dạng các kiểu biến như number, string, boolean, etc. 
// Trừ trường hợp được khai báo bên trong 1 function (khi đó biến var sẽ 
// có scope là function/locally scoped), biến var sẽ có scope là globally 
// scoped. Đặc biệt, biến var còn có thêm tính chất hoisting: nghĩa là dù 
// khai báo ở đâu thì biến đều sẽ được đem lên đầu scope trước khi code được thực hiện.

// let
// Một trong những nguyên nhân khiến let có thể thay thế var để xử lý vấn đề 
// nêu trên là vì biến let được khai báo sẽ có scope là block scoped chứ 
// không phải globally hay locally scoped.

//const
// Tương tự với let cũng có scope là block scoped, và hoisting thì chúng ta có thêm 
// 1 kiểu khai báo biến nữa là const. Trong biến const nếu trường hợp kiểu của biến 
// là primitive (bao gồm string, number, boolean, null, và undefined) thì chúng ta 
// sẽ không thể tái khai báo hay cập nhật giá trị mới để thay thế cho giá trị trước đó của biến.